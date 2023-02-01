function distanceFromHqInBlocks(street)
{
    return Math.abs(street - 42);
}

function distanceFromHqInFeet(street)
{
    return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock)
{
    return (Math.abs(endingBlock - startingBlock)*264);
}

function calculatesFarePrice(start, destination)
{
    
    let totalDistance = Math.abs(destination - start)*264;

    console.log(totalDistance);

    if (totalDistance < 400)
    {
        return 0;
    }
    else if (totalDistance >= 400 && totalDistance < 2000)
    {
        return (totalDistance - 400) * 0.02;
    }
    else if (totalDistance >= 2000 && totalDistance <= 2500)
    {
        return 25;
    }
    else 
    {
        return 'cannot travel that far';
    }
}