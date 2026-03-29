
export const preventDeleteIfLocked = (Model) => {
  return async (req, res, next) => {
    try {
      const resourceId = req.params.id;
      const adminId = req.user.id;
      const LOCK_TIMEOUT = 5 * 60 * 1000; 

      const resource = await Model.findById(resourceId);

      if (!resource) {
        return res.status(404).json({ message: "Resource not found" });
      }


      if (resource.lockedBy) {
        const now = Date.now();
        const isExpired = now - new Date(resource.lockedAt).getTime() > LOCK_TIMEOUT;


        if (!isExpired && resource.lockedBy.toString() !== adminId) {
          return res.status(423).json({
            message: "Cannot delete: This resource is currently being edited by another admin.",
          });
        }
      }

    
      next();
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };
};