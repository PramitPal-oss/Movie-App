### Star Component :

code:

```js
const ctx = useContext(MovieContext);
const ratingStar = Array.from({ length: 5 }, (_, i) => {
  let fraction = i + 0.5;

  return (
    <span key={i}>
      {props.rating >= i + 1 ? (
        <FaStar className={classes['star--icon']} />
      ) : props.rating >= fraction ? (
        <FaStarHalfAlt className={classes['star--icon']} />
      ) : (
        <AiOutlineStar className={classes['star--icon']} />
      )}
    </span>
  );
});
```

**How It Works??**

1. `Array.form` is a contructor function that returns a array of length 5. It will look like : [0,1,2,3,4] and the callback function works like a loop. so basically it will loop over all the elements of an array.

2. Suppose ratings is : 4.5 now our code will look like this :

```js
4.5 >= i=0+1(1) = true ⭐
4.5 >= i=1+1(2) = true ⭐
4.5 >= i=2+1(3) = true ⭐
4.5 >= i=3+1(4) = true ⭐
4.5 >= i=4+1(5) = false //Exexcution will stop for this condition

// Now for next condition :
4.5 >= 4+0.5(4.5) = true  ✨  //halfStar
```
