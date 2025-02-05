const Rail = require ("../models/rail.model");

exports.apply = async (req, res) => {
    const {
        Name,
        Destination,
        Age,
        nextOfKin,
        nextOfKinPhoneNumber,
    } = req.body;
try {
 if (
    !Name||
    !Destination||
    !Age||
    !nextOfKin||
    !nextOfKinPhoneNumber
 ) {
    return res
      .status(400)
      .json({ message: "Please Fill All Required fields"});
 }
  const newBooking = new Rail({
      Name,
      Destination,
      Age,
      nextOfKin,
      nextOfKinPhoneNumber
  });

  
  await newBooking.save();

    return res
      .status(201)
      .json({ message: "Booking successful", data: newBooking });
} catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error"});
}
};

exports.update = async (req, res) => {
  
   try {
    const id = req.params.id;
    const updateBookingStatus = await 
    Rail.findByIdAndUpdate(
        {
            _id: id,
        },
        {
     bookingStatus: true
    
        },{
            isNew: true
        }
     );
  if(!updateBookingStatus) {
    return res.status(404).json({ message:"Booking Status not found" });
  }

  return res
    .status(200).json({ message: "Booking Status Updated Successfully"});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error"});
  }
};



//get all booked passanger
exports.getBoookingStatus = async (req, res) => {
    const status = req.query.status; 
    try {
        if (!status) {
            return res.status(400).json({ message:"Booking Status not found" });
        }

    const allBookings = await Rail.find({bookingStatus: status})
    if (!allBookings) {
        return res.status(400).json({ message:"No Bookings Found" });
    }
    return res.status(200).json({ message: "Bookings Get Successfully", data: allBookings, length: allBookings.length});

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: " Server Error"})
    }
};


//Get all travellers
exports.getAll = async (req, res) => {
    try {
        const railBookings =  await Rail.find();
        return res.status(200).json({data:
railBookings, length: railBookings.length});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
};