using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyDiabetesAPI.Entities;
using Microsoft.AspNetCore.Cors;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MyDiabetesAPI.Controllers
{

    
    [Route("api/[controller]")]
   
    public class DiabetesController : Controller
    {

        private DiabetesContext db;

        public DiabetesController(DiabetesContext ctx)
        {
            db = ctx;
        }
            // GET: api/values
        [HttpGet("", Name = "GetAllWaardes")]
        public IActionResult Get()
        {

            try
            {
               List<Waarde> waarden = db.Waarde.Select(w => w).ToList();              
               return Ok(waarden);
                
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }

           

            
        }

        [HttpPost("")]
        public IActionResult Post([FromBody] Waarde waarde)
        {
            try
            {
               
                    Waarde newWaarde = new Waarde()
                    {
                        Waarde1 = waarde.Waarde1,
                        Insuline = waarde.Insuline,
                        Type = waarde.Type
                        
                    };

                    db.Waarde.Add(newWaarde);
                    db.SaveChanges();
                    return Ok("It worked");
                
               
                
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }

        }

        [HttpPut("{id}")]
        public IActionResult Put([FromBody] Waarde changedWaarde, int id)
        {
            try
            {
                Waarde oldWaarde = db.Waarde.FirstOrDefault(w => w.Id == id);

                if(oldWaarde != null)
                {
                    oldWaarde.Waarde1 = changedWaarde.Waarde1;
                    oldWaarde.Insuline = changedWaarde.Insuline;
                    oldWaarde.Type = changedWaarde.Type;

                    db.Waarde.Update(oldWaarde);
                    db.SaveChanges();
                    return Ok(oldWaarde);
                }
                else
                {
                    return NotFound("Waarde " + id + " not found");
                }

           
               
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }

            
        }

        [HttpGet("{id}", Name = "GetWaarde")]
        public IActionResult Get(int id)
        {
            try
            {
                Waarde waarde = db.Waarde.FirstOrDefault(c => c.Id == id);

                if(waarde == null)
                {
                    return NotFound("Waarde with id " + id + " is not found");
                }
                return Ok(waarde);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }

           
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                Waarde oldWaarde = db.Waarde.FirstOrDefault(w => w.Id == id);
                if(oldWaarde != null)
                {
                    db.Waarde.Remove(oldWaarde);
                    db.SaveChanges();

                    return Ok("Waarde " + id + " has been removed");
                }
                else
                {
                    return NotFound("Waarde " + id + " not found");
                }
            }

            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

       
    }
}
