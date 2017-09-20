"use strict";

function evaluatePokerHand( pokerHand ) {

	let cardSuits = [];
	let cardRanks = [];
	let result = {};
	let deck = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];

	separateSuitsAndRanks();
	cardMatchCount( cardRanks );

	if ( Object.keys( result ).length !== 0 ) {
		return evaluateResult( result );
	} else {
		checkStraightAndFlush();
	}

	return evaluateResult( result );

	function separateSuitsAndRanks() {
  		for ( let i = 0; i < pokerHand.length; i++ ) {
    		pokerHand[i] = pokerHand[i].split('');
    		cardSuits = cardSuits.concat( pokerHand[i].splice( pokerHand[i].length - 1 ,1) );
    		cardRanks[i] = pokerHand[i].join('');
  		}
	}

	function cardMatchCount (cardRanks) {
  		let pairsAndKinds = {};
  		cardRanks.forEach( function( card ) {
    		pairsAndKinds[card] = ( pairsAndKinds[card] || 0 ) + 1;
  		} );
  		countMatches( pairsAndKinds );
	}

	function countMatches( counts ) {
  		for( let count in counts ) {
    		if ( counts[count] === 2) {
      			result['pair'] = result['pair'] + 1 || 1;
    		} else if ( counts[count] === 3 ) {
      			result.three = true;
    		} else if ( counts[count] === 4 ) {
      			result.four = true;
    		}
  		}
	}

	function checkStraightAndFlush( pokerHand ) {
  		result.flush = cardSuits.every(function ( suit ) {
    		return suit === cardSuits[0];
    	} );
  		const sortedCards = cardRanks.sort( compareCards );
		const lowCard = sortedCards[0];
		const matchDeck = deck.indexOf( lowCard );
		const sortedDeck = deck.slice( matchDeck, matchDeck + 5 ).sort();
		result.straight = sortedDeck.join('') === sortedCards.sort().join('');
  }


	function evaluateResult( result ) {
		if ( result.three === true ) {
	    	if ( result.pair === 1 ) {
				return "Full House";
			}
			return "Three of a kind";
	    } else if (result.pair !== undefined ) {
	      	return result.pair + ' pair(s)';
	  	} else if ( result.four === true ) {
			return "Four of a kind";
	  	} else if ( result.straight === true) {
			if ( result.flush === true ) {
				return "Straight Flush";
	      	}
			return "Straight";
	    } else if ( result.flush === true) {
	      	return "Flush";
	    } else {
	      	return "You got nothing";
	    }
	}

  	function compareCards( a, b ) {
    	return a - b;
  	}
}

// export your function for testing
module.exports = function higherOrderFunction( pokerHand ) {
	return evaluatePokerHand( pokerHand );
};
