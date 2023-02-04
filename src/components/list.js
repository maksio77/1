import ListItem from "./list-item";


const List = ({data, onDelete, onChange}) => {
    const elements = data.map(item => {
        const { id, ...itemProps} = item;
        return (
        <ListItem
            key={id}
            {...itemProps}
            onDelete={()=>onDelete(id)}
            onChange={()=>onChange(id)}
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