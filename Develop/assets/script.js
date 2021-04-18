var scheduleContainerEl = $('#scheduleContainer');
var currentDay = $('#currentDay');
var currentDay = dayjs('04/17/21');
$('#1a').text(currentDay.format('MMM Do, YYYY'));
var schedule = {}
localStorage.setItem('schedule', JSON.stringify(schedule))