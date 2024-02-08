export default function ItemDetailDetail({content}:{content : string | undefined}) {
    const MoveTop = () => {
        window.scrollTo({ top: 0 })
    }
    MoveTop()
    console.log(content)
    return (
        <>
            <div dangerouslySetInnerHTML = {{__html : (content ? content : "")}}></div>
        </>
    );
}
