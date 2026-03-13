

const LOCK_TIMEOUT = 5 * 60 * 1000;

export const lockResource = (Model) => {
  return async (req, res, next) => {
    try {
      const resourceId = req.params.id;
      const adminId = req.user.id;

      const resource = await Model.findById(resourceId);

      if (!resource) {
        return res.status(404).json({ message: "Resource not found" });
      }

      const now = Date.now();

      if (resource.lockedBy) {
        const isExpired =
          now - new Date(resource.lockedAt).getTime() > LOCK_TIMEOUT;

        if (!isExpired && resource.lockedBy.toString() !== adminId) {
          return res.status(423).json({
            message: "This resource is currently being edited by another admin",
          });
        }
      }
      resource.lockedBy = adminId;
      resource.lockedAt = new Date();
      await resource.save();

      next();

      res.status(200).json({ message: "Resource locked succesfuly " });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };
};
