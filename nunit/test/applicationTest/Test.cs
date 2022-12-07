using NUnit.Framework;
using application;

namespace applicationTest
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            var actualMessage = Program.returnMessage();
            string expectedMessage = "Hello World!";
            Assert.AreEqual(expectedMessage,actualMessage,"Both messages are equal");
        }
    }
}
