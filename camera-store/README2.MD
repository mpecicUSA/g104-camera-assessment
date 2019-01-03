
Requirements - Part 2

The goal of part 2 is to add cart functionality.
User Stories

When the user clicks "Add to Cart", the item is added to the cart. -- DONE
The user can remove an item from the cart by clicking on a button. -- DONE
The subtotal, tax (use 8.6%), and total are calculated in place.The CHECKOUT button will have no functionality at this time. -- DONE

Stretch Goals

The ability to sort by name or rating (default is name) - SORT BY NAME DONE -- 
Use the ReactStars library to replace the rating number with a set of stars. Make sure that the user can't edit the rating.
Using React Router v4 to build a React user interface, create the ability for a user to visit "/cart", which will render a Cart (or Checkout), component.

The Cart (or Checkout) component is different from your live cart preview component, but instead the page where users will fill in their info when submitting an order.
Bonus 1

You now have a new checkout page, and that very first component looks quite similar to our live cart preview component on the home page. The only difference is that it doesn't display the list of items and there is no button.

Find a way to reuse your live cart preview component on the checkout page but so that the list and button don't get rendered.
Bonus 2

Add a <Miss /> component that renders a NotFound component for when a user visitings a path that does not exist in your app.