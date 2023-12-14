import supertest from "supertest";
import app from "../../app";

describe("GET /companies/", () => {
    it("should return 200 and all companies", async () => {
      const request = supertest(app);
  
      const response = await request.get("/api/v1/companies/");
  
      expect(response.statusCode).toEqual(200);
      expect(response.body).not.toBeNull();
    })
  })
  
  describe("GET /companies/id/vancancies", () => {
    it("should return 200 and all vancancies from company", async () => {
      const request = supertest(app);
  
      const response = await request.get("/api/v1/companies/56b51a8f-9c14-4582-8d1e-e12704c5f5dd/vancancies");
  
      expect(response.statusCode).toEqual(200);
      expect(response.body.vagas).not.toBeNull();
    })
  })