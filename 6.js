var fact=1;
function factorial(n)
{
    if(n==0)
        return 1
    for(i=1;i<=n;i++) 
    {
        fact*=i;  
    }
    return fact;
}
console.log(factorial(4));
