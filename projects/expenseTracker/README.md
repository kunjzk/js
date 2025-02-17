# Expense Tracker

## Quirk of form submission

The default behaviour during form submission is to:

1. Reload the page
2. Send form data to the URL specified in the form's action attribute
3. If no URL specified, submit to the current URL

--> Basically, HTML tries to send the form data to the backend.

In this case however, we want to process form data using client-side javascript (our script.js lives in the browser). So we use `e.preventDefault()` to override the default behaviour. `e` here is the input to the event listener callback function.

## Handy JS notation for calculating accumulated values: reduce

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

## Data-\* attribute

Allows us to store custom data private to the page or application. Just a handy set of classes:
https://www.w3schools.com/tags/att_global_data.asp

## forEach

Quick refresher: easy way to loop through an array is `forEach`.

```
array.forEach(element => {
    // do stuff with element
})
```

## Note about filter

- Returns a new array
