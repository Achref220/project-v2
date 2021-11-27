import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Vero rerum est dignissimos numquam ipsum provident culpa exercitationem corrupti, non quas repellendus optio mollitia ab accusantium quaerat, eum ducimus rem impedit' },
  { id: '2', title: 'Second Post', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero rerum est dignissimos numquam ipsum' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    },
  },
})

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer

