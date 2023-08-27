using Microsoft.AspNetCore.Mvc;

namespace publicieringlabb1backend.Controllers
{
    [ApiController]
    [Route("worldtime")]
    public class WorldTimeController : Controller
    {
        private static readonly WorldTime[] WorldTimes = new WorldTime[]
        {
            new WorldTime(){Country = "Sweden", Time = new DateTime(DateTime.Now.TimeOfDay.Ticks).ToShortTimeString()}
        };

        [HttpGet(Name = "/")]
        public WorldTime[] Get()
        {
            return WorldTimes;
        }
    }
}
