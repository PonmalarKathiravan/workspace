using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using dotnetapp.Models;
using Microsoft.AspNetCore.Cors;

namespace dotnetapp.Controllers
{
    [ApiController]
    [Route("Api/User")]
    [EnableCors("AllowOrigin")]
    public class UserDetailController : ControllerBase
    {
        private readonly SampleDbContext _DbContext;

    public UserDetailController(SampleDbContext dbContext)
    {
       this._DbContext = dbContext;
    }

    [HttpGet("GetUserDetails")]
    public IQueryable<UserDetail> GetAll()
    {
var users =this._DbContext.UserDetails;
return users;
    }


    [HttpGet("GetUserDetailsById/{uid}")]
    public IActionResult GetByID(int uid)
    {
            var users =this._DbContext.UserDetails.FirstOrDefault(o=>o.UserId==uid);
            return Ok(users);
    }

     [HttpDelete("DeleteUserDetails/{uid}")]
    public IActionResult DeleteUser(int uid)
    {
        string message = "";
            var user = this._DbContext.UserDetails.Find(uid);
            if (user == null)
            {
                return NotFound();
            }

            this._DbContext.UserDetails.Remove(user);
            int result = this._DbContext.SaveChanges();
            if (result > 0)
            {
                message = "User has been sussfully deleted";
            }
            else
            {
                message = "failed";
            }

            return Ok(message);
        }
    [HttpPut]  
        [Route("UpdateEmployeeDetails")]  
        public IActionResult PutUserMaster(UserDetail user)  
        {  
            string message = "";  
            if (!ModelState.IsValid)  
            {  
                return BadRequest(ModelState);  
            }  
  
            try  
            {  
                UserDetail objUser = new UserDetail();  
                objUser = this._DbContext.UserDetails.Find(user.UserId);  
                if (objUser != null)  
                {  
                    objUser.FirstName = user.FirstName;  
                    objUser.LastName = user.LastName;  
                    objUser.EmailId = user.EmailId;  
                    objUser.MobileNo = user.MobileNo;  
                    objUser.Address = user.Address;  
                    objUser.PinCode = user.PinCode;  
  
                }  
                
                int result = this._DbContext.SaveChanges();  
                if (result > 0)  
                {  
                    message = "User has been sussfully updated";  
                }  
                else  
                {  
                    message = "failed";  
                }  
  
            }  
            catch (Exception)  
            {  
                throw;  
            }  
  
            return Ok(message);  
        }  

    [HttpPost("InsertUserDetails")]
    public IActionResult CreateUser(UserDetail newuser)
    {
            string message = ""; 
                try
                {
                    this._DbContext.UserDetails.Add(newuser);
                    int result = this._DbContext.SaveChanges();
                    if (result > 0)
                    {
                        message = "User has been sussfully added";
                    }
                    else
                    {
                        message = "failed";
                    }
                }
                catch (Exception)
                {
                    throw;
                }
        
            return Ok(message);
            
    }    
    }
}