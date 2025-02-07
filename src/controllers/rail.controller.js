const Rail = require ("../models/rail.model");

exports.apply = async (req, res) => {
    const {
        name,
        destination,
        age,
        nextOfKin,
        nextOfKinPhoneNumber,
    } = req.body;
try {
 if (
    !name||
    !destination||
    !age||
    !nextOfKin||
    !nextOfKinPhoneNumber
 ) {
    return res
      .status(400)
      .json({ message: "Please Fill All Required fields"});
 }
 const booking = await Rail.findOne({ nextOfKinPhoneNumber});
if (booking) {
    return res.status(400).json({message: "User already exist"})
}
  const newBooking = new Rail({
      name,
      destination,
      age,
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


// //get all booked passanger
// exports.getBoookingStatus = async (req, res) => {
//     const status = req.query.status; 
//     try {
//         if (!status) {
//             return res.status(400).json({ message:"Booking Status not found" });
//         }

//     const allBookings = await Rail.find({bookingStatus: status})
//     if (!allBookings) {
//         return res.status(400).json({ message:"No Bookings Found" });
//     }
//     return res.status(200).json({ message: "Bookings Get Successfully", data: allBookings, count: allBookings.length});

//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: " Server Error"})
//     }
// };


//Get all travellers
exports.getAll = async (req, res) => {
    try {
        const railBookings =  await Rail.find();
        return res.status(200).json({data:
railBookings, count: railBookings.length});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
};