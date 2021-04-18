cube(`CustomerDemographics`, {
    sql: `SELECT * FROM sf10.customer_demographics`,
    
    joins: {
      
    },
    
    measures: {
      count: {
        type: `count`,
        drillMembers: []
      },
      
      cdDepCount: {
        sql: `cd_dep_count`,
        type: `sum`
      },
      
      cdDepEmployedCount: {
        sql: `cd_dep_employed_count`,
        type: `sum`
      },
      
      cdDepCollegeCount: {
        sql: `cd_dep_college_count`,
        type: `sum`
      }
    },
    
    dimensions: {
      cdGender: {
        sql: `cd_gender`,
        type: `string`
      },
      
      cdMaritalStatus: {
        sql: `cd_marital_status`,
        type: `string`
      },
      
      cdEducationStatus: {
        sql: `cd_education_status`,
        type: `string`
      },
      
      cdCreditRating: {
        sql: `cd_credit_rating`,
        type: `string`
      }
    },
    
    dataSource: `default`
  });