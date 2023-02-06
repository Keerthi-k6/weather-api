// for date and time 
const timeEle = document.getElementById('time');
const dateEle = document.getElementById('date');
//for showing time in date month year format 
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
setInterval(() => {
	const time = new Date();
	const month = time.getMonth();
	const date = time.getDate();// return value in 0-6
	const day = time.getDay();
	const hour = time.getHours();// gives 24 hr clock
	const hour12 = hour >= 13 ? hour % 12 : hour;
	const ampm = hour >= 12 ? 'PM' : 'AM';
	const mint = time.getMinutes();

	timeEle.innerHTML = hour12 + ':' + mint + '' + `<span id="am-pm">${ampm}</span>`
	dateEle.innerHTML = days[day] + ', ' + date + ' ' + months[month]

})


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd5b969a389msh7cccf7186dec337p19ba90jsn586c98339767',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
const getweather = (city)=>
{
	fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+city, options)
	.then(response => response.json())
	.then(response => {

		console.log(response)
		icon.innerHTML = `<img src= "${response.current.condition.icon}">`,
		temp_c.innerHTML = `${response.current.temp_c}°<span id="c">C</span>`,
		text.innerHTML = response.current.condition.text,
		place.innerHTML = response.location.name,
		region.innerHTML = response.location.region,
		country.innerHTML = response.location.country,
		temp_f.innerHTML = response.current.temp_f
	
	})

	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>
{
	e.preventDefault();
	getweather(city.value);
})

getweather("Vijayawada")