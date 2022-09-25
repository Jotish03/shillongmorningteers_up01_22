const Heading = require('../model/heading')

const createHeading = async (req, res) => {

    try {

        const headingText = req.body.heading;
        if(!(headingText && headingText.trim())){
            req.flash(
                'success_msg', 'Provide heading'
            );
            res.redirect("back")
        }


       const done =  await Heading.create({heading: headingText});

        req.flash(
            'success_msg',
            ' Heading Added Successfully'
        );
        res.redirect("back")
    } catch (error) {
  
        req.flash(
            'error_msg',
            error.message
        );
        res.redirect("back")
    }
}

const updateHeading = async (req,res) =>{


    try {

        const headingID = req.params.headingID,
            headingText = req.body.heading;

        if(!(headingText && headingText.trim())){
            req.flash(
                'success_msg',
                'Provide heading'
            );
            return
        }

        if(!headingID) {
            req.flash(
                'success_msg',
                'Something went wrong'
            );
            return
        }



      await Heading.findByIdAndUpdate( headingID,{ heading: headingText});
   
        req.flash(
            'success_msg',
            'Heading Updated Successfully'
        );
        res.redirect("/")
    } catch (error) {
  
        req.flash(
            'error_msg',
            error.message
        );
        res.redirect("/")
    }

}



//exporting
module.exports = {
    createHeading,
    updateHeading
}