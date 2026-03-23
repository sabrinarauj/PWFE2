import BotaoIcone from "./BotaoIcone";

export default function GridIcones({
    questoes,
    onOpen,
    modalOpen,
    trancadaIndex,
    resolvidas
}) {

    return (
        <section aria-hidden={modalOpen || undefined}
        inert={modalOpen ? "" : undefined}>
            <ul>
                {questoes.map((q, idx) => {
                    const locked = idx > trancadaIndex;
                    const resolvida = resolvidas.has(q.id)
                    return (
                        <BotaoIcone key={q.id} 
                        questao={q}
                        onOpen={onOpen}
                        locked={locked}
                        resolvida={resolvida} />
                    )
                })}
            </ul>

        </section>
    )

}