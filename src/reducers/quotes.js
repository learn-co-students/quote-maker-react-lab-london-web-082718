export default (state = [], action) => {
  
  let index
  let quote

  switch (action.type) {

    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId)
      quote = {...state[index], votes: state[index].votes + 1}
      return [...state.slice(0, index), quote, ...state.slice(index + 1)]

    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[index]
      quote = {...quote, votes: quote.votes === 0 ? 0 : quote.votes - 1}
      return [...state.slice(0, index), quote, ...state.slice(index + 1)]

    default:
      return state;

  }
}
