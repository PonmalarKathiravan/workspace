using NUnit.Framework;
using dotnetapp.Models;
using dotnetapp.Controllers;
using Moq;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
namespace myWebAPITest
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
                public void GetAll_TestAll()   
         {      
            var fakeusers=GetTestUsers().AsQueryable();
            var moqUserset= new Mock<DbSet<UserDetail>>();
         
            var moqcontext = new Mock<SampleDbContext>();
            //Arrange
            moqUserset.As<IQueryable<UserDetail>>().Setup(m => m.Provider).Returns(fakeusers.Provider);
            moqUserset.As<IQueryable<UserDetail>>().Setup(m => m.Expression).Returns(fakeusers.Expression);
            moqUserset.As<IQueryable<UserDetail>>().Setup(m => m.ElementType).Returns(fakeusers.ElementType);
            moqUserset.As<IQueryable<UserDetail>>().Setup(m=>m.GetEnumerator()).Returns(()=>fakeusers.GetEnumerator());
            
            //mockSet.As<IQueryable<Blog>>().Setup(m => m.GetEnumerator()).Returns(() => data.GetEnumerator());
            var controller = new UserDetailController(moqcontext.Object);

            moqcontext.Setup(c => c.UserDetails).Returns(moqUserset.Object);
           
            //Act
            var actual=controller.GetAll();
            System.Console.WriteLine(fakeusers.Count()+"Fake");
            System.Console.WriteLine(actual.Count()+"Actual");
            //Assert
           Assert.AreEqual(fakeusers.Count(),actual.Count());
          // Assert.That(fakeusers,Is.EqualTo(actual));
           //Assert.That(fakeusers, Is.EqualTo(actual).Using<List<UserDetail>>(EqualityComparer<List<UserDetail>>.Default));
           //Assert.That(one, Is.EqualTo(one).Using<SomeEnumerable>(EqualityComparer<SomeEnumerable>.Default));
          // CollectionAssert.AreEquivalent(fakeusers,actual);
        


        }
       /*  [Test]
        public void InsertUser_TestAddUser()   
         {     
             //arrange
             UserDetail newuser = new UserDetail()
                 {
  FirstName= "TestFName",
  LastName= "TestLName",
  EmailId= "test@gmail.com",
  MobileNo= "9789789789",
  Address= "Testing",
  PinCode= "010101"
                };
                var dbContext = new SampleDbContext();
                var controller= new UserDetailController(dbContext);
                //act

                var createResponse= controller.CreateUser(newuser);
               // var msg= createResponse.message;
               var okResult=Assert.IsInstanceOf<OkObjectResult>(createResponse.message);
               var msg= Assert.IsInstanceOf<string>(okResult.Value);
               System.Console.WriteLine(msg);
                //Assert
                Assert.AreEqual("User has been sussfully added",msg);
             } */

        public List<UserDetail> GetTestUsers()
        {
            var testProducts = new List<UserDetail>();
          testProducts.Add(new UserDetail { UserId=1, FirstName="Test1",LastName="Test2",EmailId="test@gmail.com",Address="Chennai",PinCode="600062",MobileNo="9191919191"});
          testProducts.Add(new UserDetail { UserId = 2, FirstName = "Test1", LastName = "Test2", EmailId = "test@gmail.com", Address = "Chennai", PinCode = "600062", MobileNo = "9191919191" });
          testProducts.Add(new UserDetail { UserId = 3, FirstName = "Test1", LastName = "Test2", EmailId = "test@gmail.com", Address = "Chennai", PinCode = "600062", MobileNo = "9191919191" });
          testProducts.Add(new UserDetail { UserId = 4, FirstName = "Test1", LastName = "Test2", EmailId = "test@gmail.com", Address = "Chennai", PinCode = "600062", MobileNo = "9191919191" });
            return testProducts;
        }
    }
}