dogs = [
    {src: 'img/a.jpg', breed: 'bulldog'},
    {src: 'img/b.jpg', breed: 'chihuahua'},
    {src: 'img/c.jpg', breed: 'pommerian'},
    {src: 'img/d.png', breed: 'chihuahua'},
    {src: 'img/e.jpg', breed: 'chihuahua'},
    {src: 'img/f.jpg', breed: 'chihuahua'},
    {src: 'img/g.JPG', breed: 'chihuahua'},
    {src: 'img/h.jpg', breed: 'chihuahua'},
    {src: 'img/i.jpg', breed: 'bulldog'},
    {src: 'img/j.jpeg', breed: 'poodle'},
    {src: 'img/k.jpg', breed: 'chihuahua'},
    {src: 'img/l.jpg', breed: 'poodle'}
]

random_dog_image = () => { 
    return dogs[Math.floor(Math.random() * dogs.length)];
}

$(document).ready(function(){
    // setup
    $('#rate-image').attr('src', random_dog_image().src);
    $('#rating-dropdown').val('1')
    $('#rating-button').on('click', function() {
        $('#rating-dropdown').val('1')
        $('#rate-image').attr('src', random_dog_image().src)
    });
});