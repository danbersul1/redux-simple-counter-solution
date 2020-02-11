const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "CHANGEVALUE", value: +1 }));

// Dispatch the "INCREMENT" action every time the +5 button is pressed
const increment5Button = document.getElementById('increment5');
increment5Button.addEventListener('click', e => dispatch({ type: "CHANGEVALUE", value: +5 }));

// Dispatch the "DECREMENT" action every time the -1 button is pressed
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "CHANGEVALUE", value: -1 }));

// Dispatch the "INCREMENT" action every time the -5 button is pressed
const decrement5Button = document.getElementById('decrement5');
decrement5Button.addEventListener('click', e => dispatch({ type: "CHANGEVALUE", value: -5 }));

// Dispatch the "INCREMENT" action every time the -5 button is pressed
const colorDropdown= document.getElementById('colors');
colorDropdown.addEventListener('change', e => dispatch({ type: "CHANGECOLOR", value: colorDropdown.value }));

const startNumber = document.getElementById("whatever");
startNumber.addEventListener('input', e => dispatch({type: "RESETVALUE", value: Number(e.target.value) }));
 