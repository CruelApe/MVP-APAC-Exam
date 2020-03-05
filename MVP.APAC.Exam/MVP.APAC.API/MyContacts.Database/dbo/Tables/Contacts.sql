CREATE TABLE [dbo].[Contacts] (
    [ContactId]    INT         IDENTITY (1, 1) NOT NULL,
    [FirstName]    NCHAR (20)  NULL,
    [MiddleName]   NCHAR (20)  NULL,
    [LastName]     NCHAR (20)  NULL,
    [MobileNumber] NCHAR (50)  NULL,
    [Email]        NCHAR (200) NOT NULL,
    [Organization] NCHAR (200) NOT NULL,
    [OrgPosition]  NCHAR (200) NOT NULL,
    [IsDeleted]    BIT         CONSTRAINT [DF_Contacts_IsDeleted] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [PK_Contacts] PRIMARY KEY CLUSTERED ([ContactId] ASC)
);

