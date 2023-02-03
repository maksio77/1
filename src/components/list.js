import ListItem from "./list-item";


const List = ({data, onDelete}) => {
    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return (
        <ListItem
            key={id}
            {...itemProps}
            onDelete={()=>onDelete(id)}
        />
        )
    })

    return (
        <div>
            {elements}
        </div>
    )
    
}

export default List;