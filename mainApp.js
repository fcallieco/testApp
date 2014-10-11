function checkStatus()
{
    var actualStatus = localStorage['statoAttuale'];

    if (actualStatus == null || actualStatus == "")
        actualStatus = '1';

    if (actualStatus == '1')
    {
        StartApplication();
    }    

   
}

function StartApplication()
{
    
}