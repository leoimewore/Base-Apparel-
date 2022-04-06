# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Desaturated Red: hsl(0, 36%, 70%)
- Soft Red: hsl(0, 93%, 68%)

### Neutral

- Dark Grayish Red: hsl(0, 6%, 24%)

### Gradients

- Linear, 135deg, from hsl(0, 0%, 100%), to hsl(0, 100%, 98%)
- Linear, 135deg, from hsl(0, 80%, 86%), to hsl(0, 74%, 74%)

## Typography

### Body Copy

- Font size: 16px

### Font

- Family: [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans)
- Weights: 300, 400, 600
Please provide a valid email

@media screen and (min-width:400px){
 .wrapper {
     display: grid;
     grid-template-columns: 1fr 1fr;
     grid-template-rows: 15rem 1fr;
     width:1440px;
     
 }

 .logo-img {
     /* width:30%; */
     padding: 5em;
     margin-left: 3.5em;
 }

 h1{
     font-size: 64px;
     line-height: 71px;
     text-align: left;
 }
 .hero-image {
     grid-row: span 2;
     width: 100%;
     height: 100%;
     object-fit: cover;
    object-position: 60% 10%;
     
  
 }

 main {
     width:445px;
     /* text-align: left; */
 }

 p{
     text-align: left;
     font-size: 16px;
 }

 
 

 .email::placeholder{
     font-size: 16px;
 }

 .error-msg {
     margin-left: 6em;
     margin-top: 0.5em;
 }

 
 



 }
