export const state = () => ({
  content: 'Sidebar 2'
})

export const actions = () => {
  
}

export const mutations = {
  changeLink(state, newContent) {
    state.content = newContent
  }
}