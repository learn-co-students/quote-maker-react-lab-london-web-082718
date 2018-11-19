import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {

    const {quotes, upvoteQuote, downvoteQuote, removeQuote} = this.props
    console.log(quotes)
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:
                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
              {
                quotes.map(quote => <QuoteCard
                              idx={quote.id} 
                              quote={quote}
                              upvoteQuote={upvoteQuote}
                              downvoteQuote={downvoteQuote}
                              removeQuote={removeQuote}
                              />)
              } 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed

const mapStateToProps = state => ({
  quotes: state.quotes
})


const mapDispatchToProps = dispatch => ({
  upvoteQuote: (id) => dispatch(upvoteQuote(id)),
  downvoteQuote: (id) => dispatch(downvoteQuote(id)),
  removeQuote: (id) => dispatch(removeQuote(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
