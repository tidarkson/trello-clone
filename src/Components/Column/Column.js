import { React, useState, useEffect, useRef } from "react";
import './Column.scss'
import Card from '../Card/Card'
import { mapOrder } from "../../utilities/sorts";
import { Container, Draggable } from "react-smooth-dnd"
import Dropdown from "react-bootstrap/Dropdown";
import ConfirmModal from '../Common/ConfirmModal'
import Form from 'react-bootstrap/Form'
import { MODAL_ACTION_CONFIRM, MODAL_ACTION_CLOSE } from "../../utilities/constant"
import { v4 as uuidv4 } from "uuid";


const Column = (props) => {

    const { column, onCardDrop, onUpdateColumn } = props;

    const cards = mapOrder(column.cards, column.cardOrder, 'id')

    const [isFirstClick, setIsFirstClick] = useState(true)

    const [isShowModalDelete, setShowModalDelete] = useState(false);

    const [titleColumn, setTitleColumn] = useState("");

    const [isShowAddNewCard, setIsShowAddNewCard] = useState(false)

    const [valueTextArea, setValueTextArea] = useState("")

    const textAreaRef = useRef(null)

    const inputRef = useRef(null)

    const toggleModal = () => {
        setShowModalDelete(!isShowModalDelete)
    }

    useEffect(() => {
        if (isShowAddNewCard === true && textAreaRef && textAreaRef.current){
            textAreaRef.current.focus()
        }
    }, [isShowAddNewCard])

    useEffect(() => {
        if (column && column.title) {
            setTitleColumn(column.title)
        }
    }, [column])
    const onModalAction = (type) => {
        if (type === MODAL_ACTION_CLOSE) {
            //DO NOTHING
        }
        if (type === MODAL_ACTION_CONFIRM) {
            //REMOVE  COLUMN
            const newColumn = {
                ...column,
                _destroy: true
            }
            onUpdateColumn(newColumn)
        }
        toggleModal()
    }

    const selectAllText = (event) => {
        setIsFirstClick(false)
        if (isFirstClick) {
            event.target.select();
        } else {
            inputRef.current.setSelectionRange(titleColumn.length, titleColumn.length)
        }
        // event.target.focus();
    }

    const handleClickOutside = () => {
        // do something
        setIsFirstClick(true);
        const newColumn = {
            ...column,
            title: titleColumn,
            _destroy: false
        }
        onUpdateColumn(newColumn)
    }
    const handleAddNewCard =() => {
        if(!valueTextArea){
            textAreaRef.current.focus();
            return
        }

        const newCard = {
            id: uuidv4(),
            boardId: column.boardId,
            columnId: column.id,
            title: valueTextArea,
            image: null
        }

        let newColumn = {...column}
        newColumn.cards = [...newColumn.cards, newCard]
        newColumn.cardOrder = newColumn.cards.map(card => card.id);

        onUpdateColumn(newColumn);
        setValueTextArea("");
        setIsShowAddNewCard(false)
    }

   

    return (
        <>

            <div className="column">
                <header className="column-drag-handle">
                    <div className="column-title">
                        <Form.Control
                            size={"sm"}
                            type="text"
                            value={titleColumn}
                            className="customize-input-column"
                            onClick={selectAllText}
                            onChange={(event) => setTitleColumn(event.target.value)}
                            spellCheck="false"
                            onBlur={handleClickOutside}
                            onMouseDown={e => e.preventDefault()}
                            ref={inputRef}
                        />
                    </div>

                    <div className="column-dropdown">
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic" size="sm"></Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">add card...</Dropdown.Item>
                                <Dropdown.Item onClick={toggleModal}>remove this column...</Dropdown.Item>
                                <Dropdown.Item href="#">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </header>

                <div className="card-list">
                    <Container
                        groupName="col"
                        onDrop={(dropResult) => onCardDrop(dropResult, column.id)}
                        getChildPayload={index => cards[index]}
                        dragClass="card-ghost"
                        dropClass="card-ghost-drop"

                        dropPlaceholder={{
                            animationDuration: 150,
                            showOnTop: true,
                            className: 'card-drop-preview'
                        }}
                        dropPlaceholderAnimationDuration={200}
                    >
                        {cards && cards.length > 0 && cards.map((card, index) => {
                            return (
                                <Draggable key={card.id}>
                                    <Card
                                        card={card}
                                    />
                                </Draggable>
                            )
                        })}
                    </Container>
                </div>

                {isShowAddNewCard ===true &&
                <div className="add-new-card">
                    <textarea
                        rows="2"
                        placeholder="Enter a title for this card..."
                        className="form-control "
                        ref={textAreaRef}
                        value= {valueTextArea}
                        onChange={(event) => setValueTextArea(event.target.value)}
                    ></textarea>
                    <div className="group-btn">
                        <button 
                        className="btn btn-primary"
                        onClick={()=> handleAddNewCard()}
                        >Add Card</button>
                        <i className="fa fa-times icon" onClick={() =>setIsShowAddNewCard(false)}></i>
                    </div>
                </div>
                }
                {isShowAddNewCard ===false &&
                <footer>
                    <div className="footer-action" onClick={() =>setIsShowAddNewCard(true)}>
                        <i className="fa fa-plus icon"></i> Add another card
                    </div>
                </footer>}
            </div>
            <ConfirmModal
                show={isShowModalDelete}
                title={"Remove a column"}
                content={`Are you sure to remove this column:  ${column.title}`}
                onAction={onModalAction}
            />
        </>
    )
}

export default Column