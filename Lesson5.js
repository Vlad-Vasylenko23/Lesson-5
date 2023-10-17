let arr = Array.from(Array(10))

    arr = arr.map
    (
        (i)=>
        Math.round(Math.random()*10)
    
    )

console.log (arr)
let nummin = arr[0]

for(let i = 1; i<= arr.length; i++)
{
    numm = arr[i]
    
    if(numm < nummin)
    {
        nummin = numm
        
    }
}

console.log(nummin)

