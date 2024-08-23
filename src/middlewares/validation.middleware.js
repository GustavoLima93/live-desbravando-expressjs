import { object, number } from 'yup';

const paginationSchema = object({
  page: number().positive().integer().min(1).default(1),
  size: number().positive().integer().min(1).default(10)
});

export const validatePagination = async (req, res, next) => {
  try {
    const { page, size } = req.query;

    paginationSchema.validateSync(
      { page: Number(page), size: Number(size) },
      { strict: true }
    )

  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  return next();
}