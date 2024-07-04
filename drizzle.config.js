/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://MockAIdb_owner:GyucTdzN35ep@ep-twilight-cell-a1zoqhud.ap-southeast-1.aws.neon.tech/ContentAI?sslmode=require',
    }
  };