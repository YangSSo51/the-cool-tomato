export default function ItemDetailDetail(content : string | undefined) {
    const MoveTop = () => {
        window.scrollTo({ top: 0 })
    }
    MoveTop()

    return (
        <>
            <div dangerouslySetInnerHTML = {{__html : JSON.stringify(content?.content)}}></div>
            {JSON.stringify(content?.content)}
        </>
    );
}
