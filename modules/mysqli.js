
exports.mysqli = function(data,row)
{
     k = mysqli[row];    
     for(var i in data)
     {        
     	k = k.replace(new RegExp('{{'+i+'}}', 'g'), data[i]);    	
     }
     return k;
}

var mysqli = [];

mysqli[5]  = 'select * from emp_details';
mysqli['mydb'] = 'insert into emp_details (name,emailid,phone,username,password) values(?,?,?,?,?)';