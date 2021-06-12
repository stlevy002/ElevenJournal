let Express = require("express");
let router = Express.Router();
let validateJWT = require("../middleware/validate-jwt");
//Import the Journal Model
const { JournalModel } = require("../models");

router.get("/practice", validateJWT, (req, res) => {
    res.send('Hey!!  This is a practice route!')
});



/*
Journal Create
*/
router.post("/create", validateJWT, async (req, res) => {
    const { title, date, entry } = req.body.journal;
    const { id } = req.user;
    const journalEntry = {
        title,
        date,
        entry,
        owner: id
    }
    try {
       const newJournal = await JournalModel.create(journalEntry);
       res.status(200).json(newJournal);
    } catch (err) {
      res.status(500).json({ error: err});  
    }
    JournalModel.create(journalEntry)  

    });

    /*
    __________________________________
    Get all Journals
    __________________________________
    */
   router.get("/", async (req, res) => {
      try {
          const entries = await JournalModel.findAll();
          res.status(200).json(entries);
      } catch (err) {
        res.status(500).json({ error: err });  
      }
   });

   /*
   ________________________________
   Get Journals by User
   _______________________________
   */
  router.get("/mine", validateJWT, async (req, res) => {
      const { id } = req.user;
      try {
        const userJournals = await JournalModel.findAll({
            where: {
                owner: id
            }
        });
        res.status(200).json(userJournals);  
      } catch (err) {
        res.status(500).json({ error: err});
      }
  })

  /*
  _________________________
  Get Journals by title
  ________________________
  */
    router.get("/about", (req, res) => {
        res.send("This is an about route!")
    });

module.exports = router;