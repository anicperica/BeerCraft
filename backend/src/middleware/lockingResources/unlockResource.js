export const unlockResource = (Model) => {
  return async (req, res, next) => {
    try {
      const resourceId = req.params.id;
      const adminId = req.user.id;

      const resource = await Model.findById(resourceId);

      if (!resource) {
        return res.status(404).json({ message: "Resource not found" });
      }

      if (!resource.lockedBy || resource.lockedBy.toString() !== adminId) {
        return res.status(423).json({
          message: "You dont have authority to unlock this resource",
        });
      }
  
     next();
     
    } catch (error) {
      res.status(404).json({ message: "Server error " });
    }
  };
};
