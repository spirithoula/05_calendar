var scheduleContainerEl = $('#scheduleContainer');
$('#currentDay').text(dayjs().format('MMM D, YYYY'));
var schedule = {}
localStorage.setItem('schedule', JSON.stringify(schedule))