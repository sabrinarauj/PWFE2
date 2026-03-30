import { useEffect, useId, useRef } from 'react'

export default function QuestionDialog({ questoes, index, total, onClose, onCorrect }) {

    const titleId = useId();
    const dialogRef = useRef(null);
    const closeBrnRef = useRef(null);
    const prevFocused = useRef(null);

    const [resposta, setResposta] = useState("");
    const [feedback, setFeedback] = useState({ type: "info", msg: "" });
    const [correct, setCorrect] = useState(false);

    const normalize = (s) =>
        (s ?? "")
            .toString()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[.,;:!?()\"'``~^]/g, "")
            .trim()
            .toLowerCase()


    const handleSubmit = (e) => {
        e.preventDefault();

        const user = normalize(resposta);
        const ok = (questoes.correto || []).some(
            (corr) => normalize(corr) === user
        );
        if (ok) {
            setIsCorrect(true)
            setFeedback({ type: "sucess", msg: "Resposta correta!! Próxima charada liberada." })
        } else {
            setIsCorrect(false)
            setFeedback({ type: "error", msg: "Não foi desta vez. Tente novamente!" })
        }
    }

    useEffect(() => {
        prevFocused.current = document.activeElement

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidder";
        closeBrnRef.current?.focus();

        const onKey = (e) => {
            if (e.key === "Escape") onClose()
        }

        window.addEventListener("keydown", onKey)

        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", onKey)
            if (prevFocused.current instanceof HTMLElement) prevFocused.current.focus()
        }
    }, [onClose])

    return (
        <div id={`dialog-${questoes.id}`}
            role='dialog'
            aria-modal="true"
            aria-labelledby={titleId}
            className='dialog'
            ref={dialogRef}>

            <header>
                <h2 id={titleId} className='dialog-title'>{questoes.titulo}</h2>
                <p className='dialog-subtitle'>Pergunta {index + 1} de {total}</p>
                <button ref={closeBrnRef} type='button' className='dialog-close' aria-label={`Fechar pergunta: ${questoes.titulo}`} onClick={onClose}>Fechar</button>
            </header>

            <section className='dialog-content'>
                <div className='dialog-card'>
                    <h3 className='dialog-prompt'>{questoes.prompt}</h3>

                    <form className='question-form' onSubmit={handleSubmit}>

                        <label htmlFor="resposta" className='question-label'>
                            Sua resposta
                        </label>

                        <input
                            id='resposta'
                            className='question-input'
                            type='text'
                            autoComplete='off'
                            aria-describedby='feedback'
                            aria-invalid={feedback.type === 'error' ? 'true' : 'false'}
                            value={resposta}
                            onChange={(e) => setResposta(e.target.value)}
                            disabled={isCorrect}
                            placeholder='Escreva sua resposta'
                        />

                        <div id='feedback'
                            className={`question-feedback question-feedback--${feedback.type}`}
                        >
                            {feedback.msg}
                        </div>

                        {isCorrect ? (

                            <div className='question-actions'>

                                <button type='submit' className='btn btn-primary'>Confirmar</button>
                                <button type='button' className='btn' onClick={onClose}>Voltar</button>

                            </div>
                        ) : (
                            <div className='question-actions'>
                                <button type='button' className='btn btn--sucess' onClick={() => {
                                    onCorrect(questoes.id)
                                    onClose()
                                }} aria-label="Avançar para próxima pergunta">Avançar</button>
                            </div>
                        )}
                    </form>
                    {questoes.dica && <p className='question-hint'> Dica: {questoes.dica}</p>}
                </div>
            </section>
        </div>
    )
}