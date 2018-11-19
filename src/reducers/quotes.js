export default (state = [], action) => {
  let idx
  let quote 

  switch (action.type) {

    case "ADD_QUOTE":
      console.log(action.quote)
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId);
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
        
    case "UPVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId);
      quote = {...state[idx], votes: state[idx].votes + 1 }
      return [...state.slice(0, idx), quote, ...state.slice(idx + 1)]

    case "DOWNVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[idx]
      quote = {...quote, votes: quote.votes === 0 ? 0 : quote.votes - 1}
      return [...state.slice(0, idx), quote, ...state.slice(idx + 1)]

    default:
      return state;  
    }
    
}

