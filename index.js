// Your code here
records =[
    {}
]
function createEmployeeRecord(record){
    return {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []
    }  
}
function createEmployeeRecords(employeeData){
    return employeeData.map(function(rows){
        return createEmployeeRecord(rows)
    })
}
function createTimeInEvent(dateStamp){
    
    
}

function createTimeOutEvent(){

}

function hoursWorkedOnDate(){

}

function hoursWorkedOnDate(){

}

function wagesEarnedOnDate(){

}

function allWagesFor(){

}

function calculatePayroll() {

}
