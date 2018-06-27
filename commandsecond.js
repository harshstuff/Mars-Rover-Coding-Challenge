/**
 * Created by Harsh Vashisht on 24/06/2018.
 */
var directions = {
    N: {L: 'W', R: 'E'},
    S: {L: 'E', R: 'W'},
    E: {L: 'N', R: 'S'},
    W: {L: 'S', R: 'N'}
};

var graphmovement = {
    N: {x: '0', y: '1'},
    S: {x: '0', y: '-1'},
    E: {x: '1', y: '0'},
    W: {x: '-1', y: '0'}
};

// var xcoordinate, ycoordinate, direction;

exports.moverover=  function(currentDirection , direction, x,y){

    for (i = 0; i < direction.length; i++) {
        var stringlocation=  direction.charAt(i);
        if(direction.charAt(i) === 'L' ||  direction.charAt(i) === 'R')
        {
            changedDirection = directions[currentDirection][stringlocation];
            currentDirection=changedDirection;
            // console.log(i , x ,y, changedDirection);
        }
        else
        {
            if(direction.charAt(0) === 'M')
            {
                changedDirection= currentDirection;
            }

            if(changedDirection === 'E')
            {
                x++;
            }
           else if(changedDirection === 'W')
            {
                x--;
            }
           else if(changedDirection === 'N')
            {
                y++;
            }
           else if(changedDirection === 'S')
            {
                y--;
            }
            // console.log(i ,x, y, changedDirection); Output on every single moveemnt can be viewed in Terminal

        }
        var value='';
        if(x <0 || y <0)
        {
           value= 'Invalid Commands: Rover Cannot move beyond Starting Point';
        }
        else {
             value= x+' '+y+' '+changedDirection;
        }


    }
    // console.log(changedDirection);
    // console.log('this' +value);
     return (value);
 }



