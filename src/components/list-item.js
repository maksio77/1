
const ListItem = (props) => {
    const { header, text, onDelete } = props;
    
    return (
        <div className="item">
            <div className="item__content">
            <b>{header}</b>
            <p>{text}</p>
            <div className="item__bottom">
                <ul>
                    <li onClick={onDelete}>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z" />
                        </svg>
                    </li>
                    <li>
                        <svg viewBox="0 0 18 18">
                        <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                            <g fill="#000000" id="Core" transform="translate(-213.000000, -129.000000)">
                            <g id="create" transform="translate(213.000000, 129.000000)">
                                <path
                                d="M0,14.2 L0,18 L3.8,18 L14.8,6.9 L11,3.1 L0,14.2 L0,14.2 Z M17.7,4 C18.1,3.6 18.1,3 17.7,2.6 L15.4,0.3 C15,-0.1 14.4,-0.1 14,0.3 L12.2,2.1 L16,5.9 L17.7,4 L17.7,4 Z"
                                id="Shape"
                                />
                            </g>
                            </g>
                        </g>
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    )
}

export default ListItem;