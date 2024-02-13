import {NoteItemPage, NoteTitle, NotesPara} from './styledComponents'

const NoteItem = props => {
  const {note} = props
  const {title, noteText} = note

  return (
    <NoteItemPage>
      <NoteTitle>{title}</NoteTitle>
      <NotesPara>{noteText}</NotesPara>
    </NoteItemPage>
  )
}

export default NoteItem
