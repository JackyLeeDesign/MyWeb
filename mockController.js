const fakeEvent = { status: true };

const MBTwRLMController = {
  retrieveContextUser: handler => {
    console.log('retrieveContextUser');
    const result = {
      isSuccessful: true,
      message: 'Success',
      user: {
        AccountId: '0010k00000hCOWcAAO',
        Email: 'leo11.wang@nttdata.com',
        FullPhotoUrl:
          'https://mbtwdev2-daimlerchinacommunity.cs57.force.com/taiwan/profilephoto/7290k00000022Rj/F',
        Id: '0050k000001int2AAC',
        InstanceURL:
          'https://mbtwdev2-daimlerchinacommunity.cs57.force.com/taiwan/apex/',
        IsManager: false,
        Role: 'SC',
        Name: 'Test CCM彰化 SC1',
        SmallPhotoUrl:
          'https://mbtwdev2-daimlerchinacommunity.cs57.force.com/taiwan/profilephoto/7290k00000022Rj/T',
        Title: '中華賓士 台北展售中心'
      }
    };
    handler(result, fakeEvent);
  },

  retrieveSCListForSM: handler => {
    handler(
      {
        users: [
          {
            Alias: 'czhtest1',
            AvaiableInTheNextHour: true,
            FullPhotoUrl:
              'https://mbtwdev2-daimlerchinacommunity.cs57.force.com/taiwan/profilephoto/7290k00000022Rj/F',
            Id: '0050k000001int2AAA',
            InProgressLeadCount: 23,
            Name: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            SmallPhotoUrl:
              'https://mbtwdev2-daimlerchinacommunity.cs57.force.com/taiwan/profilephoto/7290k00000022Rj/T'
          },
          {
            Alias: 'czhtest2',
            AvaiableInTheNextHour: true,
            FullPhotoUrl:
              'https://mbtwdev2-daimlerchinacommunity.cs57.force.com/taiwan/profilephoto/005/F',
            Id: '0050k000001intHAAQ',
            InProgressLeadCount: 3,
            Name: 'Test CCM彰化 SC2',
            SalesConsultantId: '0030k00000jeySTAAY',
            SmallPhotoUrl:
              'https://mbtwdev2-daimlerchinacommunity.cs57.force.com/taiwan/profilephoto/005/T'
          },
          {
            Alias: 'czhtest3',
            AvaiableInTheNextHour: true,
            FullPhotoUrl:
              'https://mbtwdev2-daimlerchinacommunity.cs57.force.com/taiwan/profilephoto/005/F',
            Id: '0050k000001intRAAQ',
            InProgressLeadCount: 2,
            Name: 'Test CCM彰化 SC3',
            SalesConsultantId: '0030k00000jeySdAAI',
            SmallPhotoUrl:
              'https://mbtwdev2-daimlerchinacommunity.cs57.force.com/taiwan/profilephoto/005/T'
          }
        ],
        isSuccessful: true,
        message: 'Success'
      },
      fakeEvent
    );
  },

  retrieveFieldTranslation: handler => {
    handler({}, fakeEvent);
  },
  retrieveAvaiableListViews: handler => {
    handler({ listViews: [] }, fakeEvent);
  },

  retrieveAvaiableCustomerListViews: handler => {
    handler({ listViews: [] }, fakeEvent);
  },

  retrieveLeads: (count, orderBy, handler) => {
    handler(
      {
        isSuccessful: true,
        leads: []
      },
      fakeEvent
    );
  },

  retrieveOpenLeadsWithBirthdayIn7Days: (orderBy, handler) => {
    handler(
      {
        isSuccessful: true,
        leads: []
      },
      fakeEvent
    );
  },

  retrieveActivities: (activityStatus, year, orderBy, handler) => {
    handler(
      {
        isSuccessful: true,
        message: 'Success',
        activities: [
          {
            AccountLinkFullName: '郝 業績',
            AccountLinkId: 'a1k0k000003wvBRAAY',
            ActivityPurpose: 'Financial and leasing related activities',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'Social Media',
            DueDate: 1546272000000,
            Id: 'a1q0k000000TAtWAAW',
            IsOverdue: true,
            LeadId: 'a160k000001GlXtAAK',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '王 宁',
            AccountLinkId: 'a1k0k000000s6twAAA',
            ActivityPurpose: 'TestDrive',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            Comments: 'Tret',
            CommunicationChannel: 'IB Call',
            DueDate: new Date().getTime(),
            Id: 'a1q0k000000TAtbAAG',
            IsOverdue: true,
            LeadId: 'a160k000001GorWAAS',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '辛 人類',
            AccountLinkId: 'a1k0k000003wvj4AAA',
            ActivityPurpose:
              'Invitation of pre-sale and post-sale marketing activity',
            ActivityStatus: 'Open',
            Comments: 'Teser',
            CommunicationChannel: 'Showroom visit',
            EndDate: new Date().getTime() + 1000000,
            Id: 'a1q0k000000T9ntAAC',
            IsOverdue: true,
            LeadId: 'a160k000001GnbNAAS',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA',
            StartDate: new Date().getTime()
          },
          {
            AccountLinkFullName: '鉿 蝦',
            AccountLinkId: 'a1k0k000003wwoQAAQ',
            ActivityPurpose: 'Negotiation',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'OB Call',
            DueDate: 1546444800000,
            Id: 'a1q0k000000TBDGAA4',
            IsOverdue: true,
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '鉿 蝦',
            AccountLinkId: 'a1k0k000003wwoQAAQ',
            ActivityPurpose: 'Insurance renewal registration',
            ActivityStatus: 'Open',
            CommunicationChannel: 'Visit Customer',
            EndDate: 1546452120000,
            Id: 'a1q0k000000TBDLAA4',
            IsOverdue: true,
            Location: '基隆市 仁愛區Texext',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA',
            StartDate: 1546448552000
          },
          {
            AccountLinkFullName: '郝 業績',
            AccountLinkId: 'a1k0k000003wvBRAAY',
            ActivityPurpose: 'Birthday care',
            ActivityStatus: 'Open',
            CommunicationChannel: 'Letter',
            DueDate: 1546617600000,
            Id: 'a1q0k000000SyqqAAC',
            IsOverdue: true,
            LeadId: 'a160k000001GlXtAAK',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '王 宁',
            AccountLinkId: 'a1k0k000000s6twAAA',
            ActivityPurpose: 'Contract',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'OB Call',
            DueDate: 1546790400000,
            Id: 'a1q0k000000TCCWAA4',
            IsOverdue: true,
            LeadId: 'a160k000001Gp7MAAS',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '郝 梧奈',
            AccountLinkId: 'a1k0k000000s7V7AAI',
            ActivityPurpose: 'TestDrive',
            ActivityStatus: 'Open',
            CommunicationChannel: 'Visit Customer',
            EndDate: 1546861200000,
            Id: 'a1q0k000000TCClAAO',
            IsOverdue: true,
            LeadId: 'a160k000001GpHTAA0',
            Location: 'Test',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA',
            StartDate: 1546857631000
          },
          {
            AccountLinkFullName: '熊',
            AccountLinkId: 'a1k0k000003wwvUAAQ',
            ActivityPurpose: 'Change contract',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'OB Call',
            DueDate: 1546876800000,
            Id: 'a1q0k000000TD8JAAW',
            IsOverdue: true,
            LeadId: 'a160k000001GpK8AAK',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '熊',
            AccountLinkId: 'a1k0k000003wwvUAAQ',
            ActivityPurpose: 'Registered',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'No Communication with Customer',
            DueDate: 1546876800000,
            Id: 'a1q0k000000TD92AAG',
            IsOverdue: true,
            LeadId: 'a160k000001GpK8AAK',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '郝 成功',
            AccountLinkId: 'a1k0k000000s7VWAAY',
            ActivityPurpose: 'Prospecting',
            ActivityStatus: 'Open',
            CommunicationChannel: 'Showroom visit',
            EndDate: 1547100120000,
            Id: 'a1q0k000000TG9KAAW',
            IsOverdue: true,
            LeadId: 'a160k0000017UFqAAM',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA',
            StartDate: 1547099950000
          },
          {
            AccountLinkFullName: '郝 成功',
            AccountLinkId: 'a1k0k000000s7VWAAY',
            ActivityPurpose: 'Prospecting',
            ActivityStatus: 'Open',
            CommunicationChannel: 'Showroom visit',
            EndDate: 1547103660000,
            Id: 'a1q0k000000TG9PAAW',
            IsOverdue: true,
            LeadId: 'a160k0000017UFqAAM',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA',
            StartDate: 1547100080000
          },
          {
            AccountLinkFullName: '吴 北',
            AccountLinkId: 'a1k0k000000s7TLAAY',
            ActivityPurpose: 'Prospecting',
            ActivityStatus: 'Open',
            CommunicationChannel: 'Showroom visit',
            EndDate: 1547464440000,
            Id: 'a1q0k000000TGnuAAG',
            IsOverdue: true,
            LeadId: 'a160k0000017U2IAAU',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA',
            StartDate: 1547460869000
          },
          {
            AccountLinkFullName: '吴 北',
            AccountLinkId: 'a1k0k000000s7TLAAY',
            ActivityPurpose: 'Prospecting',
            ActivityStatus: 'Open',
            Comments: 'Tggggg',
            CommunicationChannel: 'Showroom visit',
            EndDate: 1547475147000,
            Id: 'a1q0k000000TD6wAAG',
            IsOverdue: true,
            LeadId: 'a160k0000017U2IAAU',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA',
            StartDate: 1547471547000
          },
          {
            AccountLinkFullName: '吃 吃吃',
            AccountLinkId: 'a1k0k000003wx9AAAQ',
            ActivityPurpose: 'Registered',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'No Communication with Customer',
            DueDate: 1547481600000,
            Id: 'a1q0k000000TH9VAAW',
            IsOverdue: true,
            LeadId: 'a160k000001GpiEAAS',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '吃 吃吃',
            AccountLinkId: 'a1k0k000003wx9AAAQ',
            ActivityPurpose: 'Contract',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'Showroom visit',
            EndDate: 1547551440000,
            Id: 'a1q0k000000TH9LAAW',
            IsOverdue: true,
            LeadId: 'a160k000001GpiEAAS',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA',
            StartDate: 1547547840000
          },
          {
            AccountLinkFullName: '吃 吃吃',
            AccountLinkId: 'a1k0k000003wx9AAAQ',
            ActivityPurpose: 'HandOver',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'Showroom visit',
            EndDate: 1547551500000,
            Id: 'a1q0k000000TH9aAAG',
            IsOverdue: true,
            LeadId: 'a160k000001GpiEAAS',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA',
            StartDate: 1547547918000
          },
          {
            AccountLinkFullName: '郝 成功',
            AccountLinkId: 'a1k0k000000s7VWAAY',
            ActivityPurpose: 'Trade-in Offer',
            ActivityStatus: 'Open',
            CommunicationChannel: 'Email',
            DueDate: 1547568000000,
            Id: 'a1q0k000000TG8vAAG',
            IsOverdue: true,
            LeadId: 'a160k0000017UFqAAM',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '吃 吃吃',
            AccountLinkId: 'a1k0k000003wx9AAAQ',
            ActivityPurpose: 'TestDrive',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'Social Media',
            DueDate: 1547568000000,
            Id: 'a1q0k000000bKzhAAE',
            IsOverdue: true,
            LeadId: 'a160k000001GpiEAAS',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '熊',
            AccountLinkId: 'a1k0k000003wwvUAAQ',
            ActivityPurpose: 'Insurance renewal notice',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'Letter',
            DueDate: 1547568000000,
            Id: 'a1q0k000000bKzrAAE',
            IsOverdue: true,
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '郝 成功',
            AccountLinkId: 'a1k0k000000s7VWAAY',
            ActivityPurpose: 'Trade-in Offer',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'OB Call',
            DueDate: 1547568000000,
            Id: 'a1q0k000000bKzwAAE',
            IsOverdue: true,
            LeadId: 'a160k0000017UFqAAM',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '郝 成功',
            AccountLinkId: 'a1k0k000000s7VWAAY',
            ActivityPurpose: 'Trade-in Offer',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'Email',
            DueDate: 1547568000000,
            Id: 'a1q0k000000bL01AAE',
            IsOverdue: true,
            LeadId: 'a160k0000017UFqAAM',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '吴 北',
            AccountLinkId: 'a1k0k000000s7TLAAY',
            ActivityPurpose: 'Prospecting',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'OB Call',
            DueDate: 1547568000000,
            Id: 'a1q0k000000bL06AAE',
            IsOverdue: true,
            LeadId: 'a160k0000017U2IAAU',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '吴 北',
            AccountLinkId: 'a1k0k000000s7TLAAY',
            ActivityPurpose: 'Negotiation',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'OB Call',
            DueDate: 1547568000000,
            Id: 'a1q0k000000bL0BAAU',
            IsOverdue: true,
            LeadId: 'a160k0000017U2IAAU',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '郝 成功',
            AccountLinkId: 'a1k0k000000s7VWAAY',
            ActivityPurpose: 'Prospecting',
            ActivityStatus: 'Open',
            CommunicationChannel: 'Showroom visit',
            EndDate: 1547611227000,
            Id: 'a1q0k000000TH9GAAW',
            IsOverdue: true,
            LeadId: 'a160k0000017UFqAAM',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA',
            StartDate: 1547607627000
          },
          {
            AccountLinkFullName: '郝 業績',
            AccountLinkId: 'a1k0k000003wvBRAAY',
            ActivityPurpose: 'Financial and leasing related activities',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'Letter',
            DueDate: 1547654400000,
            Id: 'a1q0k000000bLBNAA2',
            IsOverdue: true,
            LeadId: 'a160k000001GlXtAAK',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '好 的',
            AccountLinkId: 'a1k0k000003wwxmAAA',
            ActivityPurpose: 'Registered',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'No Communication with Customer',
            DueDate: 1547654400000,
            Id: 'a1q0k000000bLCGAA2',
            IsOverdue: true,
            LeadId: 'a160k000001OMj4AAG',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '郝 業績',
            AccountLinkId: 'a1k0k000003wvBRAAY',
            ActivityPurpose: 'Trade-in Offer',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'Showroom visit',
            EndDate: 1547705940000,
            Id: 'a1q0k000000bLBIAA2',
            IsOverdue: true,
            LeadId: 'a160k000001GlXtAAK',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA',
            StartDate: 1547702394000
          },
          {
            AccountLinkFullName: '好 的',
            AccountLinkId: 'a1k0k000003wwxmAAA',
            ActivityPurpose: 'HandOver',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'Visit Customer',
            EndDate: 1547719440000,
            Id: 'a1q0k000000bLCLAA2',
            IsOverdue: true,
            LeadId: 'a160k000001OMj4AAG',
            Location: '261宜蘭縣頭城鎮',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA',
            StartDate: 1547715892000
          },
          {
            AccountLinkFullName: '郝 梧奈',
            AccountLinkId: 'a1k0k000000s7V7AAI',
            ActivityPurpose: 'Negotiation',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'OB Call',
            DueDate: 1547740800000,
            Id: 'a1q0k000000bLFeAAM',
            IsOverdue: false,
            LeadId: 'a160k000001GpHTAA0',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '唷 呼誒',
            AccountLinkId: 'a1k0k000003wv2EAAQ',
            ActivityPurpose:
              'Invitation of pre-sale and post-sale marketing activity',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'IB Call',
            DueDate: 1544025600000,
            Id: 'a1q0k000000SxA2AAK',
            IsOverdue: true,
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '王 嚛唷',
            AccountLinkId: 'a1k0k000003wv2JAAQ',
            ActivityPurpose: 'Warranty expiration care',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'OB Call',
            DueDate: 1544025600000,
            Id: 'a1q0k000000SxA7AAK',
            IsOverdue: true,
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '倪 喔',
            AccountLinkId: 'a1k0k000003wv2dAAA',
            ActivityPurpose: 'Warranty expiration care',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'Letter',
            DueDate: 1544025600000,
            Id: 'a1q0k000000SxEmAAK',
            IsOverdue: true,
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '科 救',
            AccountLinkId: 'a1k0k000003wuznAAA',
            ActivityPurpose:
              'Invitation of pre-sale and post-sale marketing activity',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'Letter',
            DueDate: 1544112000000,
            Id: 'a1q0k000000SwvwAAC',
            IsOverdue: true,
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '科 救',
            AccountLinkId: 'a1k0k000003wuzsAAA',
            ActivityPurpose: 'Customer requirement',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'Letter',
            DueDate: 1544716800000,
            Id: 'a1q0k000000Sww1AAC',
            IsOverdue: true,
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '科 救',
            AccountLinkId: 'a1k0k000003wuzxAAA',
            ActivityPurpose:
              'Invitation of pre-sale and post-sale marketing activity',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'Letter',
            DueDate: 1544716800000,
            Id: 'a1q0k000000Sww6AAC',
            IsOverdue: true,
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '郝 業績',
            AccountLinkId: 'a1k0k000003wvBRAAY',
            ActivityPurpose: 'Birthday care',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'Letter',
            DueDate: 1544976000000,
            Id: 'a1q0k000000T5c0AAC',
            IsOverdue: true,
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '吴 北',
            AccountLinkId: 'a1k0k000000s7TLAAY',
            ActivityPurpose: 'TestDrive',
            ActivityStatus: 'Open',
            Comments: 'Test by Leo',
            CommunicationChannel: 'Showroom visit',
            EndDate: 1545395812000,
            Id: 'a1q0k000000TA9IAAW',
            IsOverdue: true,
            LeadId: 'a160k0000017U2DAAU',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA',
            StartDate: 1545392212000
          },
          {
            AccountLinkFullName: '郝 業績',
            AccountLinkId: 'a1k0k000003wvBRAAY',
            ActivityPurpose: 'HandOver',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'SMS',
            DueDate: 1545580800000,
            Id: 'a1q0k000000TAPpAAO',
            IsOverdue: true,
            LeadId: 'a160k000001GlXtAAK',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '郝 優默',
            AccountLinkId: 'a1k0k000003ww9PAAQ',
            ActivityPurpose: 'Accept',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'No Communication with Customer',
            DueDate: 1545580800000,
            Id: 'a1q0k000000TAQ4AAO',
            IsOverdue: true,
            LeadId: 'a160k000001GorbAAC',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '郝 優默',
            AccountLinkId: 'a1k0k000003ww9PAAQ',
            ActivityPurpose: 'Insurance activation',
            ActivityStatus: 'Open',
            CallResult: 'In Progress',
            Comments: 'Test Hannah',
            CommunicationChannel: 'Showroom visit',
            EndDate: 1545800046000,
            Id: 'a1q0k000000TAQJAA4',
            IsOverdue: true,
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA',
            StartDate: 1545796446000
          },
          {
            AccountLinkFullName: '郝 優默',
            AccountLinkId: 'a1k0k000003ww9PAAQ',
            ActivityPurpose: 'Birthday care',
            ActivityStatus: 'Open',
            CallResult: 'In Progress',
            Comments: 'Test Hannah',
            CommunicationChannel: 'Showroom visit',
            EndDate: 1545800046000,
            Id: 'a1q0k000000TAQKAA4',
            IsOverdue: true,
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA',
            StartDate: 1545796446000
          },
          {
            AccountLinkFullName: '郝 優默',
            AccountLinkId: 'a1k0k000003ww9PAAQ',
            ActivityPurpose: 'Insurance activation',
            ActivityStatus: 'Open',
            CallResult: 'In Progress',
            Comments: 'Test Hannah_1',
            CommunicationChannel: 'Showroom visit',
            EndDate: 1545800046000,
            Id: 'a1q0k000000TAU1AAO',
            IsOverdue: true,
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA',
            StartDate: 1545796446000
          },
          {
            AccountLinkFullName: '郝 優默',
            AccountLinkId: 'a1k0k000003ww9PAAQ',
            ActivityPurpose: 'Customer requirement',
            ActivityStatus: 'Open',
            CallResult: 'In Progress',
            Comments: 'Test Hannah_2',
            CommunicationChannel: 'Showroom visit',
            EndDate: 1545800046000,
            Id: 'a1q0k000000TAU2AAO',
            IsOverdue: true,
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA',
            StartDate: 1545796446000
          },
          {
            AccountLinkFullName: '科技界 救濟金成績',
            AccountLinkId: 'a1k0k000003wuzYAAQ',
            ActivityPurpose: 'Customer requirement',
            ActivityStatus: 'Open',
            CallResult: 'In process',
            CommunicationChannel: 'OB Call',
            DueDate: 1545840000000,
            Id: 'a1q0k000000SwvrAAC',
            IsOverdue: true,
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '郝 優默',
            AccountLinkId: 'a1k0k000003ww9PAAQ',
            ActivityPurpose: 'HandOver',
            ActivityStatus: 'Open',
            CommunicationChannel: 'Showroom visit',
            EndDate: 1545885060000,
            Id: 'a1q0k000000TAQ9AAO',
            IsOverdue: true,
            LeadId: 'a160k000001GorbAAC',
            Owner: '郝 顧問',
            OwnerId: '0050k000001int2AAA',
            SalesConsultantId: '0030k00000jexurAAA',
            StartDate: 1545881496000
          }
        ].filter(it => it.ActivityStatus === activityStatus)
      },
      fakeEvent
    );
  },

  retrieveEvents: (activityStatus, year, orderBy, handler) => {},

  retrieveRetailCampaigns: (year, handler) => {
    handler(
      {
        isSuccessful: true,
        message: 'Success',
        retailCampaigns: [
          {
            Comments: 'Dealer Commetns Test',
            EndDate: new Date().getTime() + 86400000 * 2,
            Id: 'a1j0k000000TXeuAAG',
            Location: '台中',
            MBTwComment: 'MBTw Commennts Test',
            Name: 'Test Retail Campagin by Leo',
            RecordTypeName: 'TypeA',
            StartDate: new Date().getTime() - 86400000,
            Status: 'Open'
          },
          {
            Comments: 'Dealer Commetns Test',
            EndDate: 1538265600000,
            Id: 'a1j0k000000TXeuAAG',
            Location: '台中',
            MBTwComment: 'MBTw Commennts Test',
            Name: 'Test Retail Campagin by Leo',
            RecordTypeName: 'TypeA',
            StartDate: 1537920000000,
            Status: 'Open'
          },
          {
            Comments: 'Dealer Commetns Test',
            EndDate: 1545796446000,
            Id: 'a1j0k000000TXeuAAG',
            Location: '高雄',
            MBTwComment: 'MBTw Commennts Test',
            Name: 'Test Retail Campagin by Leo',
            RecordTypeName: 'TypeB',
            StartDate: 1545796446000,
            Status: 'Open'
          },
          {
            Comments: 'Dealer Commetns Test',
            EndDate: 1545646096000,
            Id: 'a1j0k000000TXeuAAG',
            Location: '台北',
            MBTwComment: 'MBTw Commennts Test',
            Name: 'Test Retail Campagin by Leo',
            RecordTypeName: 'TypeC',
            StartDate: 1545646096000,
            Status: 'Open'
          },
          {
            Comments: 'Dealer Commetns Test',
            EndDate: 1545646096000,
            Id: 'a1j0k000000TXeuAAG',
            Location: '台北',
            MBTwComment: 'MBTw Commennts Test',
            Name: 'Test Retail Campagin by Leo',
            RecordTypeName: 'TypeB',
            StartDate: 1545646096000,
            Status: 'Open'
          }
        ]
      },
      fakeEvent
    );
  },

  retrieveShiftingSchedule: (status, year, orderBy, handler) => {
    handler(
      {
        shiftingSchedules: [
          {
            Duration: 'AM',
            Id: 'a3B0k000000GP5rEAG',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            ScheduleDate: 1545523200000,
            Type: 'On Duty'
          },
          {
            Duration: 'PM',
            Id: 'a3B0k000000GP5rEAG',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            ScheduleDate: 1545523200000,
            Type: 'On Duty'
          },
          {
            Duration: 'AM',
            Id: 'a3B0k000000GP5rEAG',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            ScheduleDate: 1545523200000,
            Type: 'On Leave'
          },
          {
            Duration: 'AM',
            Id: 'a3B0k000000GP5XEAW',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            ScheduleDate: 1545350400000,
            Type: 'On Duty'
          },
          {
            Duration: 'PM',
            Id: 'a3B0k000000GP5XEAW',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            ScheduleDate: 1545350400000,
            Type: 'On Leave'
          },
          {
            Duration: 'Whole Day',
            Id: 'a3B0k000000GP5XEAW',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            ScheduleDate: 1545523200000,
            Type: 'Training'
          },
          {
            Duration: 'Whole Day',
            Id: 'a3B0k000000GP5XEAW',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            ScheduleDate: 1545523200000,
            Type: 'On Duty'
          },
          {
            Duration: 'PM',
            Id: 'a3B0k000000GP5XEAW',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            ScheduleDate: 1545908800000,
            Type: 'On Leave'
          },
          {
            Duration: 'Whole Day',
            Id: 'a3B0k000000GP5XEAW',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            ScheduleDate: 1546128000000,
            Type: 'Training'
          },
          {
            Duration: 'AM',
            Id: 'a3B0k000000GP5XEAW',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            ScheduleDate: 1546214400000,
            Type: 'On Duty'
          },
          {
            Duration: 'AM',
            Id: 'a3B0k000000GP5XEAW',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            ScheduleDate: 1547099419353,
            Type: 'On Duty'
          },
          {
            Duration: 'AM',
            Id: 'a3B0k000000GP5XEAW',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            ScheduleDate: 1546819200000,
            Type: 'On Duty'
          }
        ],
        isSuccessful: true,
        message: 'Success'
      },
      fakeEvent
    );
  },

  manageShiftingSchedule: (params, handler) => {
    handler(
      {
        isSuccessful: true,
        message: 'Success'
      },
      fakeEvent
    );
  },

  editActivity: (params, handler) => {
    handler(
      {
        isSuccessful: true,
        message: 'Success'
      },
      fakeEvent
    );
  },

  createActivity: (params, handler) => {
    handler(
      {
        isSuccessful: true,
        message: 'Success'
      },
      fakeEvent
    );
  },

  retrieveRecentlyViewedCustomers: handler => {
    handler(
      {
        accountlinks: [
          {
            FullName: '自 在',
            HasInProcessLeads: true,
            Id: 'a1k0k000003wx6uAAA',
            LastInProcessLead: 'a160k000001Gpg8AAC',
            LastLeadId: 'a160k000001Gpg8AAC',
            LastLeadStatus: 'In Progress',
            Mobile: '0986532442'
          },
          {
            FullName: '郝 成功',
            HasInProcessLeads: true,
            Id: 'a1k0k000000s7VWAAY',
            LastInProcessLead: 'a160k0000017UFqAAM',
            LastLeadId: 'a160k0000017UFqAAM',
            LastLeadStatus: 'In Progress',
            Mobile: '0977899655'
          },
          {
            FullName: '王 宁',
            HasInProcessLeads: true,
            Id: 'a1k0k000000s6twAAA',
            LastInProcessLead: 'a160k000001Gp7MAAS',
            LastLeadId: 'a160k000001Gp7MAAS',
            LastLeadStatus: 'In Progress',
            Mobile: '2134567890'
          },
          {
            FullName: '吴 北',
            HasInProcessLeads: true,
            Id: 'a1k0k000000s7TLAAY',
            LastInProcessLead: 'a160k0000017U2IAAU',
            LastLeadId: 'a160k0000017U2NAAU',
            LastLeadStatus: 'Lost Sales',
            Mobile: '2345678999'
          },
          {
            FullName: '馬 唷唷',
            HasInProcessLeads: false,
            Id: 'a1k0k000000s7n3AAA',
            LastLeadId: 'a160k0000017e8wAAA',
            LastLeadStatus: 'Lost Sales',
            Mobile: '0976289289'
          },
          {
            FullName: '郝 梧奈',
            HasInProcessLeads: true,
            Id: 'a1k0k000000s7V7AAI',
            LastInProcessLead: 'a160k000001GpHTAA0',
            LastLeadId: 'a160k000001GpHTAA0',
            LastLeadStatus: 'In Progress',
            Mobile: '0976688899'
          },
          {
            FullName: '辛 人類',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wvj4AAA',
            LastLeadId: 'a160k000001GnbNAAS',
            LastLeadStatus: 'Lost Sales',
            Mobile: '0922345678',
            Phone: '0255555555',
            WorkPhone: '0288665000'
          },
          {
            FullName: 'ㄊ',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wwybAAA',
            Mobile: '0919200202'
          },
          {
            FullName: '科 救',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wuziAAA',
            Mobile: '0988889990'
          },
          {
            FullName: '林 玲玲',
            HasInProcessLeads: true,
            Id: 'a1k0k000000s7SDAAY',
            LastInProcessLead: 'a160k0000017U1UAAU',
            LastLeadId: 'a160k0000017U1UAAU',
            LastLeadStatus: 'In Progress',
            Mobile: '0933888222'
          },
          {
            FullName: '好 的',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wwxmAAA',
            Mobile: '0921331931'
          },
          {
            FullName: '測 試',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wwxhAAA',
            Mobile: '0912334585'
          },
          {
            FullName: '賴',
            HasInProcessLeads: false,
            Id: 'a1k0k000000s720AAA',
            Mobile: '0912234556'
          },
          {
            FullName: '科 救',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wv02AAA',
            Mobile: '0988889999'
          },
          {
            FullName: '董',
            HasInProcessLeads: true,
            Id: 'a1k0k000000s712AAA',
            LastInProcessLead: 'a160k0000017TAoAAM',
            LastLeadId: 'a160k0000017TAoAAM',
            LastLeadStatus: 'In Progress',
            Mobile: '3245678901'
          },
          {
            FullName: '科 救',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wuzdAAA',
            Mobile: '0988889990'
          },
          {
            FullName: '王 子',
            HasInProcessLeads: true,
            Id: 'a1k0k000003zzE9AAI',
            LastInProcessLead: 'a160k000001GpFwAAK',
            LastLeadId: 'a160k000001GpFwAAK',
            LastLeadStatus: 'In Progress',
            Mobile: '0987654345'
          },
          {
            FullName: '刘6',
            HasInProcessLeads: false,
            Id: 'a1k0k000000s70nAAA',
            LastLeadId: 'a160k0000017TAeAAM',
            LastLeadStatus: 'Successful',
            Mobile: '1234567890'
          },
          {
            FullName: '郝',
            HasInProcessLeads: true,
            Id: 'a1k0k000000s6YwAAI',
            LastInProcessLead: 'a160k0000017SqXAAU',
            LastLeadId: 'a160k0000017SqXAAU',
            LastLeadStatus: 'In Progress',
            Mobile: '0938290380'
          },
          {
            FullName: '郝 優默',
            HasInProcessLeads: false,
            Id: 'a1k0k000003ww9PAAQ',
            LastLeadId: 'a160k000001GorbAAC',
            LastLeadStatus: 'Lost Sales',
            Mobile: '0912345678'
          },
          {
            FullName: '毛 吉娃',
            HasInProcessLeads: false,
            Id: 'a1k0k000003www3AAA',
            Mobile: '0988999999',
            Phone: '0288889999',
            WorkPhone: '0233334444'
          },
          {
            FullName: '熊',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wwvUAAQ',
            LastLeadId: 'a160k000001GpK8AAK',
            LastLeadStatus: 'Successful',
            WorkPhone: '034456788'
          },
          {
            FullName: '吳 用',
            HasInProcessLeads: false,
            Id: 'a1k0k000000s7WFAAY',
            LastLeadId: 'a160k0000017UIGAA2',
            LastLeadStatus: 'Lost Sales',
            Mobile: '0923888111'
          },
          {
            FullName: '蕭 西西',
            HasInProcessLeads: true,
            Id: 'a1k0k000000s6YrAAI',
            LastInProcessLead: 'a160k0000017U1ZAAU',
            LastLeadId: 'a160k0000017U1ZAAU',
            LastLeadStatus: 'In Progress',
            Mobile: '0938644666'
          },
          {
            FullName: '郝 了又',
            HasInProcessLeads: true,
            Id: 'a1k0k000000s7W5AAI',
            LastInProcessLead: 'a160k0000017UHhAAM',
            LastLeadId: 'a160k0000017UHhAAM',
            LastLeadStatus: 'In Progress',
            Mobile: '09281927492'
          },
          {
            FullName: '王',
            HasInProcessLeads: true,
            Id: 'a1k0k000003wv2OAAQ',
            LastInProcessLead: 'a160k000001GlKTAA0',
            LastLeadId: 'a160k000001GlKTAA0',
            LastLeadStatus: 'In Progress',
            WorkPhone: '0233338888'
          },
          {
            FullName: 'ㄆㄇ',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wwtQAAQ',
            Mobile: '0977899665'
          },
          {
            FullName: 'ㄍㄍ',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wwtLAAQ',
            Mobile: '0977899665'
          },
          {
            FullName: 'f fddd',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wwt1AAA',
            WorkPhone: '029999999'
          },
          {
            FullName: '重',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wwqgAAA',
            Mobile: '0977899655'
          }
        ],
        isSuccessful: true,
        message: 'Success'
      },
      fakeEvent
    );
  },

  retrieveAccountLinks: handler => {
    handler(
      {
        accountlinks: [
          {
            Age: 28,
            Birthday: 654393600000,
            CompanyId: 'a1k0k000000s62GAAQ',
            CompanyName: '大公司',
            CompanyVATNO: '97164400',
            CompanyWorkPhone: '456789543',
            CustomerType: 'P',
            DaysSinceLastCRMActivity: 22,
            FullName: '王 宁',
            HasInProcessLeads: true,
            Id: 'a1k0k000000s6twAAA',
            LastCRMActivity: 'a1q0k000000TAPkAAO',
            LastCRMActivity_ActivityPurpose: 'Warranty expiration care',
            LastCRMActivity_CallResult: 'Successful',
            LastCRMActivity_EndDate: 1545617940000,
            LastLeadId: 'a160k000001Gp7MAAS',
            LastLeadNo: 'L-0012654060',
            LastLeadStatus: 'In Progress',
            Mobile: '2134567890',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            Age: 3,
            Birthday: 1451606400000,
            CompanyId: 'a1k0k000003zzfqAAA',
            CompanyName: '測測',
            CompanyVATNO: '53195996',
            CustomerType: 'P',
            DaysSinceLastCRMActivity: 81,
            FullName: '郝 成功',
            HasInProcessLeads: true,
            Id: 'a1k0k000000s7VWAAY',
            LastCRMActivity: 'a1q0k000000WhN5AAK',
            LastCRMActivity_ActivityPurpose: 'Birthday care',
            LastCRMActivity_CallResult: 'Successful',
            LastCRMActivity_EndDate: 1540552680000,
            LastLeadId: 'a160k0000017UFqAAM',
            LastLeadNo: 'L-0012653608',
            LastLeadStatus: 'In Progress',
            Mobile: '0977899655',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Miss'
          },
          {
            CustomerType: 'P',
            DaysSinceLastCRMActivity: 100,
            FullName: '郝 梧奈',
            HasInProcessLeads: true,
            Id: 'a1k0k000000s7V7AAI',
            LastCRMActivity: 'a1q0k000000WWSlAAO',
            LastCRMActivity_ActivityPurpose: 'Birthday care',
            LastCRMActivity_CallResult: 'Successful',
            LastCRMActivity_EndDate: 1538841600000,
            LastLeadId: 'a160k000001GpHTAA0',
            LastLeadNo: 'L-0012654068',
            LastLeadStatus: 'In Progress',
            Mobile: '0976688899',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Miss'
          },
          {
            Age: 28,
            Birthday: 650073600000,
            CustomerType: 'P',
            FullName: '王 楠',
            HasInProcessLeads: true,
            Id: 'a1k0k000000s7z2AAA',
            LastLeadId: 'a160k000001GpHJAA0',
            LastLeadNo: 'L-0012654065',
            LastLeadStatus: 'In Progress',
            Mobile: '2134567890',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: '自 在',
            HasInProcessLeads: true,
            Id: 'a1k0k000003wx6uAAA',
            LastLeadId: 'a160k000001Gpg8AAC',
            LastLeadNo: 'L-0012654076',
            LastLeadStatus: 'In Progress',
            Mobile: '0986532442',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: '王',
            HasInProcessLeads: true,
            Id: 'a1k0k000003wv2OAAQ',
            LastLeadId: 'a160k000001GlKTAA0',
            LastLeadNo: 'L-0012654049',
            LastLeadStatus: 'In Progress',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Miss',
            WorkPhone: '0233338888'
          },
          {
            CustomerType: 'P',
            FullName: '王 子',
            HasInProcessLeads: true,
            Id: 'a1k0k000003zzE9AAI',
            LastLeadId: 'a160k000001GpFwAAK',
            LastLeadNo: 'L-0012654062',
            LastLeadStatus: 'In Progress',
            Mobile: '0987654345',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: '林 玲玲',
            HasInProcessLeads: true,
            Id: 'a1k0k000000s7SDAAY',
            LastLeadId: 'a160k0000017U1UAAU',
            LastLeadNo: 'L-0012653592',
            LastLeadStatus: 'In Progress',
            Mobile: '0933888222',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Miss'
          },
          {
            CompanyId: 'a1k0k000000s71CAAQ',
            CompanyName: '公司不好',
            CompanyVATNO: '97164400',
            CustomerType: 'P',
            FullName: '董',
            HasInProcessLeads: true,
            Id: 'a1k0k000000s712AAA',
            LastLeadId: 'a160k0000017TAoAAM',
            LastLeadNo: 'L-0012653585',
            LastLeadStatus: 'In Progress',
            Mobile: '3245678901',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            Age: 29,
            Birthday: 642729600000,
            CustomerType: 'P',
            DaysSinceLastCRMActivity: 39,
            FullName: '梅 人要',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wvF9AAI',
            LastCRMActivity: 'a1q0k000000SypxAAC',
            LastCRMActivity_ActivityPurpose: 'Vehicle pick-up or returning',
            LastCRMActivity_CallResult: 'Failed',
            LastCRMActivity_EndDate: 1544168747000,
            LastLeadId: 'a160k000001GljzAAC',
            LastLeadNo: 'L-0012654053',
            LastLeadStatus: 'Successful',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr',
            WorkPhone: '02298877777'
          },
          {
            Age: 18,
            Birthday: 978998400000,
            CompanyId: 'a1k0k000003wwvPAAQ',
            CompanyName: 'ㄐㄔㄕㄕㄐㄔㄕㄕㄑ',
            CompanyVATNO: '28431000',
            CustomerType: 'P',
            FullName: '熊',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wwvUAAQ',
            LastLeadId: 'a160k000001GpK8AAK',
            LastLeadNo: 'L-0012654069',
            LastLeadStatus: 'Successful',
            PreferredMarketingActivity: '高爾夫活動;藝文活動',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Miss',
            WorkPhone: '034456788'
          },
          {
            CustomerType: 'P',
            FullName: '郝 豪德',
            HasInProcessLeads: false,
            Id: 'a1k0k000000s7myAAA',
            LastLeadId: 'a160k0000017WHiAAM',
            LastLeadNo: 'L-0012653774',
            LastLeadStatus: 'Successful',
            Mobile: '0979532690',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: '刘6',
            HasInProcessLeads: false,
            Id: 'a1k0k000000s70nAAA',
            LastLeadId: 'a160k0000017TAeAAM',
            LastLeadNo: 'L-0012653583',
            LastLeadStatus: 'Successful',
            Mobile: '1234567890',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            Age: 21,
            Birthday: 885427200000,
            CompanyId: 'a1k0k000003wwnXAAQ',
            CompanyName: '測試',
            CompanyVATNO: '53195996',
            CompanyWorkPhone: '0912334566',
            CustomerType: 'P',
            DaysSinceLastCRMActivity: 13,
            FullName: '辛 人類',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wvj4AAA',
            LastCRMActivity: 'a1q0k000000TB1lAAG',
            LastCRMActivity_ActivityPurpose: 'Vehicle pick-up or returning',
            LastCRMActivity_CallResult: 'Successful',
            LastCRMActivity_EndDate: 1546414999000,
            LastLeadId: 'a160k000001GnbNAAS',
            LastLeadNo: 'L-0012654056',
            LastLeadStatus: 'Lost Sales',
            Mobile: '0922345678',
            Phone: '0255555555',
            PreferredMarketingActivity:
              '試乘試駕活動;賓士信用卡購物/購票優惠;親子活動',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr',
            WorkPhone: '0288665000'
          },
          {
            CustomerType: 'P',
            DaysSinceLastCRMActivity: 69,
            FullName: '馬 唷唷',
            HasInProcessLeads: false,
            Id: 'a1k0k000000s7n3AAA',
            LastCRMActivity: 'a1q0k000000WnUnAAK',
            LastCRMActivity_ActivityPurpose: 'Vehicle pick-up or returning',
            LastCRMActivity_CallResult: 'Successful',
            LastCRMActivity_EndDate: 1541520000000,
            LastLeadId: 'a160k0000017e8wAAA',
            LastLeadNo: 'L-0012653888',
            LastLeadStatus: 'Lost Sales',
            Mobile: '0976289289',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            Age: 94,
            Birthday: -1415145600000,
            CompanyId: 'a1k0k000000s71CAAQ',
            CompanyName: '公司不好',
            CompanyVATNO: '97164400',
            CustomerType: 'P',
            FullName: '郝 人客',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wvBgAAI',
            LastLeadId: 'a160k000001GlYNAA0',
            LastLeadNo: 'L-0012654051',
            LastLeadStatus: 'Lost Sales',
            Mobile: '0956888877',
            PreferredMarketingActivity:
              '車主雜誌;高爾夫活動;賓士信用卡購物/購票優惠',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr',
            WorkPhone: '0255557777'
          },
          {
            Age: 19,
            Birthday: 963100800000,
            CompanyId: 'a1k0k000000s7ShAAI',
            CompanyName: '好型',
            CompanyVATNO: '53195996',
            CustomerType: 'P',
            FullName: '吴 北',
            HasInProcessLeads: true,
            Id: 'a1k0k000000s7TLAAY',
            LastLeadId: 'a160k0000017U2NAAU',
            LastLeadNo: 'L-0012653602',
            LastLeadStatus: 'Lost Sales',
            Mobile: '2345678999',
            PreferredMarketingActivity: '露營活動',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Miss'
          },
          {
            Age: 19,
            Birthday: 938304000000,
            CustomerType: 'P',
            FullName: '赵',
            HasInProcessLeads: false,
            Id: 'a1k0k000000s6ufAAA',
            LastLeadId: 'a160k0000017T8YAAU',
            LastLeadNo: 'L-0012653572',
            LastLeadStatus: 'Lost Sales',
            Mobile: '2567893210',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: '郝 優默',
            HasInProcessLeads: false,
            Id: 'a1k0k000003ww9PAAQ',
            LastLeadId: 'a160k000001GorbAAC',
            LastLeadNo: 'L-0012654059',
            LastLeadStatus: 'Lost Sales',
            Mobile: '0912345678',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: 'wo',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wvbeAAA',
            LastLeadId: 'a160k000001Goa1AAC',
            LastLeadNo: 'L-0012654057',
            LastLeadStatus: 'Lost Sales',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr',
            WorkPhone: '5566777777'
          },
          {
            CustomerType: 'P',
            FullName: '王 嚛唷',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wv2JAAQ',
            LastLeadId: 'a160k000001GpHEAA0',
            LastLeadNo: 'L-0012654064',
            LastLeadStatus: 'Lost Sales',
            Mobile: '09456888667',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: '科 救',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wuzxAAA',
            LastLeadId: 'a160k000001Gl4TAAS',
            LastLeadNo: 'L-0012654048',
            LastLeadStatus: 'Lost Sales',
            Mobile: '0988889999',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: '倪 好',
            HasInProcessLeads: false,
            Id: 'a1k0k000000s7gCAAQ',
            LastLeadId: 'a160k0000017WE6AAM',
            LastLeadNo: 'L-0012653717',
            LastLeadStatus: 'Lost Sales',
            Mobile: '0966789754',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            DaysSinceLastCRMActivity: 8,
            FullName: 'f fddd',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wwt1AAA',
            LastCRMActivity: 'a1q0k000000TC5LAAW',
            LastCRMActivity_ActivityPurpose: 'Insurance renewal notice',
            LastCRMActivity_CallResult: 'Successful',
            LastCRMActivity_EndDate: 1546790400000,
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr',
            WorkPhone: '029999999'
          },
          {
            CustomerType: 'P',
            DaysSinceLastCRMActivity: 61,
            FullName: '科技界 救濟金成績',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wuzYAAQ',
            LastCRMActivity: 'a1q0k000000SwvmAAC',
            LastCRMActivity_ActivityPurpose: 'Warranty expiration care',
            LastCRMActivity_CallResult: 'Successful',
            LastCRMActivity_EndDate: 1542211200000,
            Mobile: '0988889990',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            Age: 18,
            Birthday: 979084800000,
            CompanyId: 'a1k0k000003wwvyAAA',
            CompanyName: '星企業',
            CompanyVATNO: '28431000',
            CustomerType: 'P',
            FullName: '毛 吉娃',
            HasInProcessLeads: false,
            Id: 'a1k0k000003www3AAA',
            Mobile: '0988999999',
            Phone: '0288889999',
            PreferredMarketingActivity: '高爾夫活動;賓士信用卡購物/購票優惠',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr',
            WorkPhone: '0233334444'
          },
          {
            Age: 18,
            Birthday: 979171200000,
            CompanyId: 'a1k0k000000moBVAAY',
            CompanyName: 'Test Company Account Link 2',
            CustomerType: 'P',
            FullName: '鉿 蝦',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wwoQAAQ',
            Mobile: '0977799990',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            Age: 18,
            Birthday: 977184000000,
            CustomerType: 'P',
            FullName: 'Wang Leo Test 201812',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wv3qAAA',
            Mobile: '0923456789',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: 'ㄊ',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wwybAAA',
            Mobile: '0919200202',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: '好 的',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wwxmAAA',
            Mobile: '0921331931',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Miss'
          },
          {
            CustomerType: 'P',
            FullName: '測 試',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wwxhAAA',
            Mobile: '0912334585',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Miss'
          },
          {
            CustomerType: 'P',
            FullName: 'ㄆㄇ',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wwtQAAQ',
            Mobile: '0977899665',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: 'ㄍㄍ',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wwtLAAQ',
            Mobile: '0977899665',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: '重',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wwqgAAA',
            Mobile: '0977899655',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: '郝 好好',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wwofAAA',
            Mobile: '0988666555',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: '新 人課',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wwoVAAQ',
            Mobile: '0922111111',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: 'R wrrwr',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wv2YAAQ',
            Mobile: '0945353535',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Miss'
          },
          {
            CustomerType: 'P',
            FullName: '郝',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wvRdAAI',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr',
            WorkPhone: '55667'
          },
          {
            CustomerType: 'P',
            FullName: '王',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wvRYAAY',
            Mobile: '0912334455',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: 'T tt',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wv2TAAQ',
            Mobile: '0966776677',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: '郝 業',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wvBWAAY',
            Mobile: '0977788990',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: '倪 喔',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wv2dAAA',
            Mobile: '0966543334',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: '唷 呼誒',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wv2EAAQ',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Miss',
            WorkPhone: '07788966644'
          },
          {
            CustomerType: 'P',
            FullName: '科 救',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wv02AAA',
            Mobile: '0988889999',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: '科 救',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wuzsAAA',
            Mobile: '0988889990',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: '科 救',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wuznAAA',
            Mobile: '0988889990',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: '科 救',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wuziAAA',
            Mobile: '0988889990',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: '科 救',
            HasInProcessLeads: false,
            Id: 'a1k0k000003wuzdAAA',
            Mobile: '0988889990',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: '賴',
            HasInProcessLeads: false,
            Id: 'a1k0k000000s720AAA',
            Mobile: '0912234556',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          },
          {
            CustomerType: 'P',
            FullName: '賴',
            HasInProcessLeads: false,
            Id: 'a1k0k000000s725AAA',
            Mobile: '0912234556',
            SalesConsultant: 'Test CCM彰化 SC1',
            SalesConsultantId: '0030k00000jexurAAA',
            Salutation: 'Mr'
          }
        ],
        isSuccessful: true,
        message: 'Success'
      },
      fakeEvent
    );
  },
  retrieveLeadsByListViewName: (listViewName, orderByPara, handler) => {
    handler(
      {
        leads: [
          {
            AccountLinkFullName: '郝業績',
            AccountLinkId: 'a1k0k000003wvBRAAY',
            AccountLinkMobile: '0912345678',
            CommissionNo: 'WD12345678',
            ContactContent: 'Trade-in Offer',
            CreatedDate: 1544093850000,
            CurrentChannel: 'Retail Inbound',
            DaysSinceLastActivity: 217,
            EstRegistrationDate: 1550534400000,
            Grading: 'H - Within 1 Week',
            Id: 'a160k000001GlXtAAK',
            LastContactContentDateTime: 1547705940000,
            LeadStatus: 'In Progress',
            LeadStatusDetail: 'R',
            VehicleStockStatus: 'Stock in TW/on ship',
            Owner: '郝 顧問',
            OwnerAlias: 'czhtest1',
            OwnerId: '0050k000001int2AAA',
            ResultforLastContactContent: 'Failed',
            RetailInterestedVehicleBrand: 'Mercedes-AMG',
            RetailInterestedVehicleClass: 'C Estate (S205)',
            RetailInterestedVehicleModel: 'M-AMG C43 4M T',
            SalesConsultant: '郝 顧問',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '辛人類',
            AccountLinkId: 'a1k0k000003wvj4AAA',
            AccountLinkMobile: '0938-645949',
            AccountLinkPhone: '0255555555',
            AccountLinkWorkPhone: '(02)886650',
            ContactContent: 'TestDrive',
            CreatedDate: 1550203059000,
            CurrentChannel: 'Referral',
            DaysSinceLastActivity: 188,
            EstRegistrationDate: 1550102400000,
            Grading: 'A - Within 1 month',
            Id: 'a160k000001ORA5AAO',
            LastContactContentDateTime: 1550207220000,
            LeadStatus: 'In Progress',
            LeadStatusDetail: 'A',
            Owner: '郝 顧問',
            OwnerAlias: 'czhtest1',
            OwnerId: '0050k000001int2AAA',
            ResultforLastContactContent: 'Successful',
            RetailInterestedVehicleBrand: 'Mercedes-Maybach',
            RetailInterestedVehicleClass: 'Maybach (X222)',
            RetailInterestedVehicleModel: 'M-MAYBACH S650',
            SalesConsultant: '郝 顧問',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '唷唷唷',
            AccountLinkId: 'a1k0k000003z0DTAAY',
            AccountLinkMobile: '0922828282',
            ContactContent: 'Contract',
            CreatedDate: 1562666605000,
            CurrentChannel: 'Marketing',
            DaysSinceLastActivity: 44,
            EstRegistrationDate: 1563926400000,
            Grading: 'A - Within 1 month',
            Id: 'a160k000001jDJDAA2',
            LastContactContentDateTime: 1562670180000,
            LeadStatus: 'In Progress',
            LeadStatusDetail: 'A',
            Owner: '郝 顧問',
            OwnerAlias: 'czhtest1',
            OwnerId: '0050k000001int2AAA',
            ResultforLastContactContent: 'Successful',
            RetailInterestedVehicleBrand: 'Mercedes-Benz',
            RetailInterestedVehicleClass: 'CLS (C257)',
            RetailInterestedVehicleModel: 'CLS350',
            SalesConsultant: '郝 顧問',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '老王',
            AccountLinkId: 'a1k0k0000042ClWAAU',
            AccountLinkMobile: '0947656788',
            AccountLinkWorkPhone: '0911234566',
            ContactContent: 'Contract',
            CreatedDate: 1563443056000,
            CurrentChannel: 'Walk-in',
            DaysSinceLastActivity: 36,
            Grading: 'A - Within 1 month',
            Id: 'a160k000001jEWWAA2',
            LastContactContentDateTime: 1563360240000,
            LeadStatus: 'In Progress',
            Owner: '郝 顧問',
            OwnerAlias: 'czhtest1',
            OwnerId: '0050k000001int2AAA',
            ResultforLastContactContent: 'Successful',
            RetailInterestedVehicleBrand: 'Mercedes-Maybach',
            RetailInterestedVehicleClass: 'Maybach (X222)',
            RetailInterestedVehicleModel: 'M-MAYBACH S560',
            SalesConsultant: '郝 顧問',
            SalesConsultantId: '0030k00000jexurAAA'
          },
          {
            AccountLinkFullName: '笑嘻嘻',
            AccountLinkId: 'a1k0k0000043wpoAAA',
            AccountLinkMobile: '0922999222',
            CommissionNo: '0881712345',
            ContactContent: 'Accept',
            CreatedDate: 1551174478000,
            CurrentChannel: 'Acquisition',
            DaysSinceLastActivity: 184,
            EstRegistrationDate: 1551312000000,
            Grading: 'A - Within 1 month',
            Id: 'a160k000001OSkMAAW',
            LastContactContentDateTime: 1550592000000,
            LeadStatus: 'In Progress',
            LeadStatusDetail: 'A',
            Owner: '郝 顧問',
            OwnerAlias: 'czhtest1',
            OwnerId: '0050k000001int2AAA',
            ResultforLastContactContent: 'Successful',
            RetailInterestedVehicleBrand: 'Mercedes-Maybach',
            RetailInterestedVehicleClass: 'Maybach (X222)',
            RetailInterestedVehicleModel: 'M-MAYBACH S560',
            SalesConsultant: '郝 顧問',
            SalesConsultantId: '0030k00000jexurAAA'
          }
        ],
        isSuccessful: true,
        message: 'Success'
      },
      fakeEvent
    );
  },
  retrieveAvaiableListViews: handler => {
    handler(
      {
        listViews: [
          {
            label: '待處理的銷售商機',
            value: 'To-do List'
          },
          {
            label: '促進中的銷售商機',
            value: 'My Open Leads'
          },
          {
            label: '等級H/A的銷售商機',
            value: 'H/A Grade Leads'
          },
          {
            label: '今日成功掛牌銷售商機',
            value: 'Registration Successful Leads Today'
          }
        ],
        isSuccessful: true,
        message: 'Success'
      },
      fakeEvent
    );
  },
  retrieveMonthlySalesTargets: handler => {
    handler(
      {
        salesTargetItems: [
          {
            FSLeaseLoanTarget: 12,
            Id: 'a300k000000BJ8yAAG',
            Month: 1,
            OrderAchievement: -2,
            OrderTarget: 2,
            RegistrationAchievement: -3,
            RegistrationTarget: 3,
            SalesConsultantId: '0030k00000jexurAAA',
            SalesConsultantName: '郝 顧問',
            TestDriveAchievement: -5,
            TestDriveTarget: 5,
            Year: 2019
          },
          {
            FSLeaseLoanTarget: 3,
            Id: 'a300k000000BJ90AAG',
            Month: 2,
            OrderAchievement: 4,
            OrderActual: 16,
            OrderTarget: 12,
            RegistrationAchievement: -6,
            RegistrationActual: 15,
            RegistrationTarget: 23,
            ReserveCarActual: 2,
            SalesConsultantId: '0030k00000jexurAAA',
            SalesConsultantName: '郝 顧問',
            TestDriveAchievement: -19,
            TestDriveActual: 2,
            TestDriveTarget: 21,
            Year: 2019
          }
        ],
        isSuccessful: true,
        message: 'Success'
      },
      fakeEvent
    );
  },
  retrieveSalesTargets: handler => {
    handler(
      {
        salesTargets: [
          {
            CSalesRegistration2ndHalfTarget: 20,
            CSalesTradeIn2ndHalfTarget: 43,
            Id: 'a310k000000BHRPAA4',
            SalesConsultantId: '0030k00000jexurAAA',
            Year: '2018'
          },
          {
            CSalesRegistration1stHalfAchievement: 130,
            CSalesRegistration1stHalfActual: 30,
            CSalesRegistration1stHalfTarget: 23,
            CSalesRegistration2ndHalfAchievement: 0,
            CSalesRegistration2ndHalfActual: 0,
            CSalesRegistration2ndHalfTarget: 20,
            CSalesTradeIn1stHalfAchievement: 160,
            CSalesTradeIn1stHalfActual: 16,
            CSalesTradeIn1stHalfTarget: 10,
            CSalesTradeIn2ndHalfAchievement: 60,
            CSalesTradeIn2ndHalfActual: 6,
            CSalesTradeIn2ndHalfTarget: 10,
            Id: 'a310k000000ISqQAAW',
            OrderAnnualAchievement: 10,
            OrderAnnualTarget: 22,
            OrderYearToMonthActual: 32,
            OrderYearToMonthTarget: 10,
            RegistrationAnnualAchievement: 16,
            RegistrationAnnualTarget: 14,
            RegistrationYearToMonthActual: 30,
            RegistrationYearToMonthTarget: 15,
            SalesConsultantId: '0030k00000jexurAAA',
            Year: '2019'
          }
        ],
        isSuccessful: true,
        message: 'Success'
      },
      fakeEvent
    );
  },
  retrieveCompanyAccountLinks: handler => {},

  retrieveRecentlyViewedLeads: handler => {},

  retrieveAccountLinkMetadata: handler => {
    handler(
      {
        Country: {
          values: [
            { value: '本國人士', validFor: [], label: '本國人士' },
            {
              value: '外籍人士',
              validFor: [],
              label: '外籍人士'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Account_Link__c/picklist-values/0126F000000A92nQAC/Country__c',
          eTag: 'd64c0821e2d83abe89d5040c7df2cd1d',
          controllerValues: {}
        },
        AllowDataSharing: {
          values: [
            { value: 'Yes', validFor: [], label: '是' },
            {
              value: 'No',
              validFor: [],
              label: '否'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Account_Link__c/picklist-values/0126F000000A92nQAC/RetailAllowDataSharing__c',
          eTag: 'd22711a9fd2749b4a823a4695bccd116',
          controllerValues: {}
        },
        AllowPersonalInfo: {
          values: [
            {
              value: 'Signed',
              validFor: [],
              label: '已簽署'
            },
            { value: 'Not Signed Yet', validFor: [], label: '未簽署' }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Account_Link__c/picklist-values/0126F000000A92nQAC/RetailAllowPersonalInfo__c',
          eTag: '8e2c25f3642d5cb193d39fec1e560bf5',
          defaultValue: {
            value: 'Not Signed Yet',
            validFor: [],
            label: '未簽署'
          },
          controllerValues: {}
        },
        SourceOfContact: {
          values: [
            { value: '其他', validFor: [], label: '其他' },
            {
              value: '直銷信函廣告',
              validFor: [],
              label: '直銷信函廣告'
            },
            { value: '網際網路', validFor: [], label: '網際網路' },
            {
              value: '雜誌廣告',
              validFor: [],
              label: '雜誌廣告'
            },
            { value: '報紙廣告', validFor: [], label: '報紙廣告' },
            {
              value: '看板廣告',
              validFor: [],
              label: '看板廣告'
            },
            { value: '電台廣告', validFor: [], label: '電台廣告' },
            {
              value: '電視廣告',
              validFor: [],
              label: '電視廣告'
            },
            { value: '員工介紹', validFor: [], label: '員工介紹' },
            {
              value: '店頭促銷',
              validFor: [],
              label: '店頭促銷'
            },
            { value: '親友介紹', validFor: [], label: '親友介紹' },
            {
              value: 'DCT朋馳雜誌(BMS)',
              validFor: [],
              label: 'DCT朋馳雜誌(BMS)'
            },
            { value: 'DCT天下一千大', validFor: [], label: 'DCT天下一千大' },
            {
              value: 'DCT-B Class 晶華酒店',
              validFor: [],
              label: 'DCT-B Class 晶華酒店'
            },
            { value: '無', validFor: [], label: '無' }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Account_Link__c/picklist-values/0126F000000A92nQAC/Retail_Source_of_Contact__c',
          eTag: 'a39121c877b01093d3ac95fec82d6752',
          controllerValues: {}
        },
        CustomerType: {
          values: [
            { value: 'P', validFor: [], label: '潛在客戶' },
            {
              value: 'X',
              validFor: [],
              label: 'X'
            },
            { value: 'C', label: '客戶' },
            { value: 'R', label: '重複客戶' }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Account_Link__c/picklist-values/0126F000000A92nQAC/Retail_CustomerType__c',
          eTag: '776a0d7f1cf4006e87243ddd5c1001db',
          defaultValue: { value: 'P', validFor: [], label: '潛在客戶' },
          controllerValues: {}
        },
        MBTwPostCode: {
          values: [
            { value: '100', validFor: [], label: '台北市 中正區' },
            {
              value: '103',
              validFor: [],
              label: '台北市 大同區'
            },
            { value: '104', validFor: [], label: '台北市 中山區' },
            {
              value: '105',
              validFor: [],
              label: '台北市 松山區'
            },
            { value: '106', validFor: [], label: '台北市 大安區' },
            {
              value: '108',
              validFor: [],
              label: '台北市 萬華區'
            },
            { value: '110', validFor: [], label: '台北市 信義區' },
            {
              value: '111',
              validFor: [],
              label: '台北市 士林區'
            },
            { value: '112', validFor: [], label: '台北市 北投區' },
            {
              value: '114',
              validFor: [],
              label: '台北市 內湖區'
            },
            { value: '115', validFor: [], label: '台北市 南港區' },
            {
              value: '116',
              validFor: [],
              label: '台北市 文山區'
            },
            { value: '200', validFor: [], label: '基隆市 仁愛區' },
            {
              value: '201',
              validFor: [],
              label: '基隆市 信義區'
            },
            { value: '202', validFor: [], label: '基隆市 中正區' },
            {
              value: '203',
              validFor: [],
              label: '基隆市 中山區'
            },
            { value: '204', validFor: [], label: '基隆市 安樂區' },
            {
              value: '205',
              validFor: [],
              label: '基隆市 暖暖區'
            },
            { value: '206', validFor: [], label: '基隆市 七堵區' },
            {
              value: '207',
              validFor: [],
              label: '新北市 萬里區'
            },
            { value: '208', validFor: [], label: '新北市 金山區' },
            {
              value: '209',
              validFor: [],
              label: '連江縣 南竿鄉'
            },
            { value: '210', validFor: [], label: '連江縣 北竿鄉' },
            {
              value: '211',
              validFor: [],
              label: '連江縣 莒光鄉'
            },
            { value: '212', validFor: [], label: '連江縣 東引鄉' },
            {
              value: '220',
              validFor: [],
              label: '新北市 板橋區'
            },
            { value: '221', validFor: [], label: '新北市 汐止區' },
            {
              value: '222',
              validFor: [],
              label: '新北市 深坑區'
            },
            { value: '223', validFor: [], label: '新北市 石碇區' },
            {
              value: '224',
              validFor: [],
              label: '新北市 瑞芳區'
            },
            { value: '226', validFor: [], label: '新北市 平溪區' },
            {
              value: '227',
              validFor: [],
              label: '新北市 雙溪區'
            },
            { value: '228', validFor: [], label: '新北市 貢寮區' },
            {
              value: '231',
              validFor: [],
              label: '新北市 新店區'
            },
            { value: '232', validFor: [], label: '新北市 坪林區' },
            {
              value: '233',
              validFor: [],
              label: '新北市 烏來區'
            },
            { value: '234', validFor: [], label: '新北市 永和區' },
            {
              value: '235',
              validFor: [],
              label: '新北市 中和區'
            },
            { value: '236', validFor: [], label: '新北市 土城區' },
            {
              value: '237',
              validFor: [],
              label: '新北市 三峽區'
            },
            { value: '238', validFor: [], label: '新北市 樹林區' },
            {
              value: '239',
              validFor: [],
              label: '新北市 鶯歌區'
            },
            { value: '241', validFor: [], label: '新北市 三重區' },
            {
              value: '242',
              validFor: [],
              label: '新北市 新莊區'
            },
            { value: '243', validFor: [], label: '新北市 泰山區' },
            {
              value: '244',
              validFor: [],
              label: '新北市 林口區'
            },
            { value: '247', validFor: [], label: '新北市 蘆洲區' },
            {
              value: '248',
              validFor: [],
              label: '新北市 五股區'
            },
            { value: '249', validFor: [], label: '新北市 八里區' },
            {
              value: '251',
              validFor: [],
              label: '新北市 淡水區'
            },
            { value: '252', validFor: [], label: '新北市 三芝區' },
            {
              value: '253',
              validFor: [],
              label: '新北市 石門區'
            },
            { value: '260', validFor: [], label: '宜蘭縣 宜蘭市' },
            {
              value: '261',
              validFor: [],
              label: '宜蘭縣 頭城鎮'
            },
            { value: '262', validFor: [], label: '宜蘭縣 礁溪鄉' },
            {
              value: '263',
              validFor: [],
              label: '宜蘭縣 壯圍鄉'
            },
            { value: '264', validFor: [], label: '宜蘭縣 員山鄉' },
            {
              value: '265',
              validFor: [],
              label: '宜蘭縣 羅東鎮'
            },
            { value: '266', validFor: [], label: '宜蘭縣 三星鄉' },
            {
              value: '267',
              validFor: [],
              label: '宜蘭縣 大同鄉'
            },
            { value: '268', validFor: [], label: '宜蘭縣 五結鄉' },
            {
              value: '269',
              validFor: [],
              label: '宜蘭縣 冬山鄉'
            },
            { value: '271', validFor: [], label: '宜蘭縣 蘇澳鎮' },
            {
              value: '272',
              validFor: [],
              label: '宜蘭縣 南澳鄉'
            },
            { value: '300', validFor: [], label: '新竹市 .' },
            {
              value: '302',
              validFor: [],
              label: '新竹縣 竹北市'
            },
            { value: '303', validFor: [], label: '新竹縣 湖口鄉' },
            {
              value: '304',
              validFor: [],
              label: '新竹縣 新豐鄉'
            },
            { value: '305', validFor: [], label: '新竹縣 新埔鎮' },
            {
              value: '306',
              validFor: [],
              label: '新竹縣 關西鎮'
            },
            { value: '307', validFor: [], label: '新竹縣 芎林鄉' },
            {
              value: '308',
              validFor: [],
              label: '新竹縣 寶山鄉'
            },
            { value: '310', validFor: [], label: '新竹縣 竹東鎮' },
            {
              value: '311',
              validFor: [],
              label: '新竹縣 五峰鄉'
            },
            { value: '312', validFor: [], label: '新竹縣 橫山鄉' },
            {
              value: '313',
              validFor: [],
              label: '新竹縣 尖石鄉'
            },
            { value: '314', validFor: [], label: '新竹縣 北埔鄉' },
            {
              value: '315',
              validFor: [],
              label: '新竹縣 峨眉鄉'
            },
            { value: '320', validFor: [], label: '桃園市 中壢區' },
            {
              value: '324',
              validFor: [],
              label: '桃園市 平鎮區'
            },
            { value: '325', validFor: [], label: '桃園市 龍潭區' },
            {
              value: '326',
              validFor: [],
              label: '桃園市 楊梅區'
            },
            { value: '327', validFor: [], label: '桃園市 新屋區' },
            {
              value: '328',
              validFor: [],
              label: '桃園市 觀音區'
            },
            { value: '330', validFor: [], label: '桃園市 桃園區' },
            {
              value: '333',
              validFor: [],
              label: '桃園市 龜山區'
            },
            { value: '334', validFor: [], label: '桃園市 八德區' },
            {
              value: '335',
              validFor: [],
              label: '桃園市 大溪區'
            },
            { value: '336', validFor: [], label: '桃園市 復興區' },
            {
              value: '337',
              validFor: [],
              label: '桃園市 大園區'
            },
            { value: '338', validFor: [], label: '桃園市 蘆竹區' },
            {
              value: '350',
              validFor: [],
              label: '苗栗縣 竹南鎮'
            },
            { value: '351', validFor: [], label: '苗栗縣 頭份鎮' },
            {
              value: '352',
              validFor: [],
              label: '苗栗縣 三灣鄉'
            },
            { value: '353', validFor: [], label: '苗栗縣 南庄鄉' },
            {
              value: '354',
              validFor: [],
              label: '苗栗縣 獅潭鄉'
            },
            { value: '356', validFor: [], label: '苗栗縣 後龍鎮' },
            {
              value: '357',
              validFor: [],
              label: '苗栗縣 通霄鎮'
            },
            { value: '358', validFor: [], label: '苗栗縣 苑裡鎮' },
            {
              value: '360',
              validFor: [],
              label: '苗栗縣 苗栗市'
            },
            { value: '361', validFor: [], label: '苗栗縣 造橋鄉' },
            {
              value: '362',
              validFor: [],
              label: '苗栗縣 頭屋鄉'
            },
            { value: '363', validFor: [], label: '苗栗縣 公館鄉' },
            {
              value: '364',
              validFor: [],
              label: '苗栗縣 大湖鄉'
            },
            { value: '365', validFor: [], label: '苗栗縣 泰安鄉' },
            {
              value: '366',
              validFor: [],
              label: '苗栗縣 銅鑼鄉'
            },
            { value: '367', validFor: [], label: '苗栗縣 三義鄉' },
            {
              value: '368',
              validFor: [],
              label: '苗栗縣 西湖鄉'
            },
            { value: '369', validFor: [], label: '苗栗縣 卓蘭鎮' },
            {
              value: '400',
              validFor: [],
              label: '台中市 中區'
            },
            { value: '401', validFor: [], label: '台中市 東區' },
            {
              value: '402',
              validFor: [],
              label: '台中市 南區'
            },
            { value: '403', validFor: [], label: '台中市 西區' },
            {
              value: '404',
              validFor: [],
              label: '台中市 北區'
            },
            { value: '406', validFor: [], label: '台中市 北屯區' },
            {
              value: '407',
              validFor: [],
              label: '台中市 西屯區'
            },
            { value: '408', validFor: [], label: '台中市 南屯區' },
            {
              value: '411',
              validFor: [],
              label: '台中市 太平區'
            },
            { value: '412', validFor: [], label: '台中市 大里區' },
            {
              value: '413',
              validFor: [],
              label: '台中市 霧峰區'
            },
            { value: '414', validFor: [], label: '台中市 烏日區' },
            {
              value: '420',
              validFor: [],
              label: '台中市 豐原區'
            },
            { value: '421', validFor: [], label: '台中市 后里區' },
            {
              value: '422',
              validFor: [],
              label: '台中市 石岡區'
            },
            { value: '423', validFor: [], label: '台中市 東勢區' },
            {
              value: '424',
              validFor: [],
              label: '台中市 和平區'
            },
            { value: '426', validFor: [], label: '台中市 新社區' },
            {
              value: '427',
              validFor: [],
              label: '台中市 潭子區'
            },
            { value: '428', validFor: [], label: '台中市 大雅區' },
            {
              value: '429',
              validFor: [],
              label: '台中市 神岡區'
            },
            { value: '432', validFor: [], label: '台中市 大肚區' },
            {
              value: '433',
              validFor: [],
              label: '台中市 沙鹿區'
            },
            { value: '434', validFor: [], label: '台中市 龍井區' },
            {
              value: '435',
              validFor: [],
              label: '台中市 梧棲區'
            },
            { value: '436', validFor: [], label: '台中市 清水區' },
            {
              value: '437',
              validFor: [],
              label: '台中市 大甲區'
            },
            { value: '438', validFor: [], label: '台中市 外埔區' },
            {
              value: '439',
              validFor: [],
              label: '台中市 大安區'
            },
            { value: '500', validFor: [], label: '彰化縣 彰化市' },
            {
              value: '502',
              validFor: [],
              label: '彰化縣 芬園鄉'
            },
            { value: '503', validFor: [], label: '彰化縣 花壇鄉' },
            {
              value: '504',
              validFor: [],
              label: '彰化縣 秀水鄉'
            },
            { value: '505', validFor: [], label: '彰化縣 鹿港鎮' },
            {
              value: '506',
              validFor: [],
              label: '彰化縣 福興鄉'
            },
            { value: '507', validFor: [], label: '彰化縣 線西鄉' },
            {
              value: '508',
              validFor: [],
              label: '彰化縣 和美鎮'
            },
            { value: '509', validFor: [], label: '彰化縣 伸港鄉' },
            {
              value: '510',
              validFor: [],
              label: '彰化縣 員林鎮'
            },
            { value: '511', validFor: [], label: '彰化縣 社頭鄉' },
            {
              value: '512',
              validFor: [],
              label: '彰化縣 永靖鄉'
            },
            { value: '513', validFor: [], label: '彰化縣 埔心鄉' },
            {
              value: '514',
              validFor: [],
              label: '彰化縣 溪湖鎮'
            },
            { value: '515', validFor: [], label: '彰化縣 大村鄉' },
            {
              value: '516',
              validFor: [],
              label: '彰化縣 埔鹽鄉'
            },
            { value: '520', validFor: [], label: '彰化縣 田中鎮' },
            {
              value: '521',
              validFor: [],
              label: '彰化縣 北斗鎮'
            },
            { value: '522', validFor: [], label: '彰化縣 田尾鄉' },
            {
              value: '523',
              validFor: [],
              label: '彰化縣 埤頭鄉'
            },
            { value: '524', validFor: [], label: '彰化縣 溪州鄉' },
            {
              value: '525',
              validFor: [],
              label: '彰化縣 竹塘鄉'
            },
            { value: '526', validFor: [], label: '彰化縣 二林鎮' },
            {
              value: '527',
              validFor: [],
              label: '彰化縣 大城鄉'
            },
            { value: '528', validFor: [], label: '彰化縣 芳苑鄉' },
            {
              value: '530',
              validFor: [],
              label: '彰化縣 二水鄉'
            },
            { value: '540', validFor: [], label: '南投縣 南投市' },
            {
              value: '541',
              validFor: [],
              label: '南投縣 中寮鄉'
            },
            { value: '542', validFor: [], label: '南投縣 草屯鎮' },
            {
              value: '544',
              validFor: [],
              label: '南投縣 國姓鄉'
            },
            { value: '545', validFor: [], label: '南投縣 埔里鎮' },
            {
              value: '546',
              validFor: [],
              label: '南投縣 仁愛鄉'
            },
            { value: '551', validFor: [], label: '南投縣 名間鄉' },
            {
              value: '552',
              validFor: [],
              label: '南投縣 集集鎮'
            },
            { value: '553', validFor: [], label: '南投縣 水里鄉' },
            {
              value: '555',
              validFor: [],
              label: '南投縣 魚池鄉'
            },
            { value: '556', validFor: [], label: '南投縣 信義鄉' },
            {
              value: '557',
              validFor: [],
              label: '南投縣 竹山鎮'
            },
            { value: '558', validFor: [], label: '南投縣 鹿谷鄉' },
            {
              value: '600',
              validFor: [],
              label: '嘉義市 .'
            },
            { value: '602', validFor: [], label: '嘉義縣 番路鄉' },
            {
              value: '603',
              validFor: [],
              label: '嘉義縣 梅山鄉'
            },
            { value: '604', validFor: [], label: '嘉義縣 竹崎鄉' },
            {
              value: '605',
              validFor: [],
              label: '嘉義縣 阿里山鄉'
            },
            { value: '608', validFor: [], label: '嘉義縣 水上鄉' },
            {
              value: '612',
              validFor: [],
              label: '嘉義縣 太保市'
            },
            { value: '613', validFor: [], label: '嘉義縣 朴子市' },
            {
              value: '615',
              validFor: [],
              label: '嘉義縣 六腳鄉'
            },
            { value: '622', validFor: [], label: '嘉義縣 大林鎮' },
            {
              value: '624',
              validFor: [],
              label: '嘉義縣 義竹鄉'
            },
            { value: '625', validFor: [], label: '嘉義縣 布袋鎮' },
            {
              value: '630',
              validFor: [],
              label: '雲林縣 斗南鎮'
            },
            { value: '631', validFor: [], label: '雲林縣 大埤鄉' },
            {
              value: '632',
              validFor: [],
              label: '雲林縣 虎尾鎮'
            },
            { value: '633', validFor: [], label: '雲林縣 土庫鎮' },
            {
              value: '634',
              validFor: [],
              label: '雲林縣 褒忠鄉'
            },
            { value: '635', validFor: [], label: '雲林縣 東勢鄉' },
            {
              value: '636',
              validFor: [],
              label: '雲林縣 台西鄉'
            },
            { value: '637', validFor: [], label: '雲林縣 崙背鄉' },
            {
              value: '638',
              validFor: [],
              label: '雲林縣 麥寮鄉'
            },
            { value: '640', validFor: [], label: '雲林縣 斗六市' },
            {
              value: '643',
              validFor: [],
              label: '雲林縣 林內鄉'
            },
            { value: '646', validFor: [], label: '雲林縣 古坑鄉' },
            {
              value: '647',
              validFor: [],
              label: '雲林縣 莿桐鄉'
            },
            { value: '648', validFor: [], label: '雲林縣 西螺鎮' },
            {
              value: '649',
              validFor: [],
              label: '雲林縣 二崙鄉'
            },
            { value: '651', validFor: [], label: '雲林縣 北港鎮' },
            {
              value: '652',
              validFor: [],
              label: '雲林縣 水林鄉'
            },
            { value: '653', validFor: [], label: '雲林縣 口湖鄉' },
            {
              value: '654',
              validFor: [],
              label: '雲林縣 四湖鄉'
            },
            { value: '655', validFor: [], label: '雲林縣 元長鄉' },
            {
              value: '700',
              validFor: [],
              label: '台南市 中西區'
            },
            { value: '701', validFor: [], label: '台南市 東區' },
            {
              value: '702',
              validFor: [],
              label: '台南市 南區'
            },
            { value: '703', validFor: [], label: '台南市 西區' },
            {
              value: '704',
              validFor: [],
              label: '台南市 北區'
            },
            { value: '708', validFor: [], label: '台南市 安平區' },
            {
              value: '709',
              validFor: [],
              label: '台南市 安南區'
            },
            { value: '710', validFor: [], label: '台南市 永康區' },
            {
              value: '711',
              validFor: [],
              label: '台南市 歸仁區'
            },
            { value: '712', validFor: [], label: '台南市 新化區' },
            {
              value: '713',
              validFor: [],
              label: '台南市 左鎮區'
            },
            { value: '714', validFor: [], label: '台南市 玉井區' },
            {
              value: '715',
              validFor: [],
              label: '台南市 楠西區'
            },
            { value: '716', validFor: [], label: '台南市 南化區' },
            {
              value: '717',
              validFor: [],
              label: '台南市 仁德區'
            },
            { value: '718', validFor: [], label: '台南市 關廟區' },
            {
              value: '719',
              validFor: [],
              label: '台南市 龍崎區'
            },
            { value: '720', validFor: [], label: '台南市 官田區' },
            {
              value: '721',
              validFor: [],
              label: '台南市 麻豆區'
            },
            { value: '722', validFor: [], label: '台南市 佳里區' },
            {
              value: '723',
              validFor: [],
              label: '台南市 西港區'
            },
            { value: '724', validFor: [], label: '台南市 七股區' },
            {
              value: '725',
              validFor: [],
              label: '台南市 將軍區'
            },
            { value: '726', validFor: [], label: '台南市 學甲區' },
            {
              value: '727',
              validFor: [],
              label: '台南市 北門區'
            },
            { value: '730', validFor: [], label: '台南市 新營區' },
            {
              value: '731',
              validFor: [],
              label: '台南市 後壁區'
            },
            { value: '732', validFor: [], label: '台南市 白河區' },
            {
              value: '733',
              validFor: [],
              label: '台南市 東山區'
            },
            { value: '734', validFor: [], label: '台南市 六甲區' },
            {
              value: '735',
              validFor: [],
              label: '台南市 下營區'
            },
            { value: '736', validFor: [], label: '台南市 柳營區' },
            {
              value: '737',
              validFor: [],
              label: '台南市 鹽水區'
            },
            { value: '741', validFor: [], label: '台南市 善化區' },
            {
              value: '742',
              validFor: [],
              label: '台南市 大內區'
            },
            { value: '743', validFor: [], label: '台南市 山上區' },
            {
              value: '744',
              validFor: [],
              label: '台南市 新市區'
            },
            { value: '745', validFor: [], label: '台南市 安定區' },
            {
              value: '800',
              validFor: [],
              label: '高雄市 新興區'
            },
            { value: '801', validFor: [], label: '高雄市 前金區' },
            {
              value: '802',
              validFor: [],
              label: '高雄市 苓雅區'
            },
            { value: '803', validFor: [], label: '高雄市 鹽埕區' },
            {
              value: '804',
              validFor: [],
              label: '高雄市 鼓山區'
            },
            { value: '805', validFor: [], label: '高雄市 旗津區' },
            {
              value: '806',
              validFor: [],
              label: '高雄市 前鎮區'
            },
            { value: '807', validFor: [], label: '高雄市 三民區' },
            {
              value: '811',
              validFor: [],
              label: '高雄市 楠梓區'
            },
            { value: '812', validFor: [], label: '高雄市 小港區' },
            {
              value: '813',
              validFor: [],
              label: '高雄市 左營區'
            },
            { value: '814', validFor: [], label: '高雄市 仁武區' },
            {
              value: '815',
              validFor: [],
              label: '高雄市 大社區'
            },
            { value: '820', validFor: [], label: '高雄市 岡山區' },
            {
              value: '821',
              validFor: [],
              label: '高雄市 路竹區'
            },
            { value: '822', validFor: [], label: '高雄市 阿蓮區' },
            {
              value: '823',
              validFor: [],
              label: '高雄市 田寮區'
            },
            { value: '824', validFor: [], label: '高雄市 燕巢區' },
            {
              value: '825',
              validFor: [],
              label: '高雄市 橋頭區'
            },
            { value: '826', validFor: [], label: '高雄市 梓官區' },
            {
              value: '827',
              validFor: [],
              label: '高雄市 彌陀區'
            },
            { value: '828', validFor: [], label: '高雄市 永安區' },
            {
              value: '829',
              validFor: [],
              label: '高雄市 湖內區'
            },
            { value: '830', validFor: [], label: '高雄市 鳳山區' },
            {
              value: '831',
              validFor: [],
              label: '高雄市 大寮區'
            },
            { value: '832', validFor: [], label: '高雄市 林園區' },
            {
              value: '833',
              validFor: [],
              label: '高雄市 鳥松區'
            },
            { value: '840', validFor: [], label: '高雄市 大樹區' },
            {
              value: '842',
              validFor: [],
              label: '高雄市 旗山區'
            },
            { value: '843', validFor: [], label: '高雄市 美濃區' },
            {
              value: '844',
              validFor: [],
              label: '高雄市 六龜區'
            },
            { value: '845', validFor: [], label: '高雄市 內門區' },
            {
              value: '846',
              validFor: [],
              label: '高雄市 杉林區'
            },
            { value: '847', validFor: [], label: '高雄市 甲仙區' },
            {
              value: '848',
              validFor: [],
              label: '高雄市 桃源區'
            },
            { value: '849', validFor: [], label: '高雄市 那瑪夏區' },
            {
              value: '851',
              validFor: [],
              label: '高雄市 茂林區'
            },
            { value: '852', validFor: [], label: '高雄市 茄萣區' },
            {
              value: '880',
              validFor: [],
              label: '澎湖縣 馬公市'
            },
            { value: '881', validFor: [], label: '澎湖縣 西嶼鄉' },
            {
              value: '882',
              validFor: [],
              label: '澎湖縣 望安鄉'
            },
            { value: '883', validFor: [], label: '澎湖縣 七美鄉' },
            {
              value: '884',
              validFor: [],
              label: '澎湖縣 白沙鄉'
            },
            { value: '885', validFor: [], label: '澎湖縣 湖西鄉' },
            {
              value: '890',
              validFor: [],
              label: '金門縣 金沙鎮'
            },
            { value: '891', validFor: [], label: '金門縣 金湖鎮' },
            {
              value: '892',
              validFor: [],
              label: '金門縣 金寧鄉'
            },
            { value: '893', validFor: [], label: '金門縣 金城鎮' },
            {
              value: '894',
              validFor: [],
              label: '金門縣 烈嶼鄉'
            },
            { value: '896', validFor: [], label: '金門縣 烏坵鄉' },
            {
              value: '900',
              validFor: [],
              label: '屏東縣 屏東市'
            },
            { value: '901', validFor: [], label: '屏東縣 三地門鄉' },
            {
              value: '902',
              validFor: [],
              label: '屏東縣 霧台鄉'
            },
            { value: '903', validFor: [], label: '屏東縣 瑪家鄉' },
            {
              value: '904',
              validFor: [],
              label: '屏東縣 九如鄉'
            },
            { value: '905', validFor: [], label: '屏東縣 里港鄉' },
            {
              value: '906',
              validFor: [],
              label: '屏東縣 高樹鄉'
            },
            { value: '907', validFor: [], label: '屏東縣 鹽埔鄉' },
            {
              value: '909',
              validFor: [],
              label: '屏東縣 麟洛鄉'
            },
            { value: '911', validFor: [], label: '屏東縣 竹田鄉' },
            {
              value: '912',
              validFor: [],
              label: '屏東縣 內埔鄉'
            },
            { value: '913', validFor: [], label: '屏東縣 萬丹鄉' },
            {
              value: '920',
              validFor: [],
              label: '屏東縣 潮州鎮'
            },
            { value: '921', validFor: [], label: '屏東縣 泰武鄉' },
            {
              value: '922',
              validFor: [],
              label: '屏東縣 來義鄉'
            },
            { value: '923', validFor: [], label: '屏東縣 萬巒鄉' },
            {
              value: '924',
              validFor: [],
              label: '屏東縣 崁頂鄉'
            },
            { value: '925', validFor: [], label: '屏東縣 新埤鄉' },
            {
              value: '926',
              validFor: [],
              label: '屏東縣 南州鄉'
            },
            { value: '927', validFor: [], label: '屏東縣 林邊鄉' },
            {
              value: '928',
              validFor: [],
              label: '屏東縣 東港鎮'
            },
            { value: '929', validFor: [], label: '屏東縣 琉球鄉' },
            {
              value: '931',
              validFor: [],
              label: '屏東縣 佳冬鄉'
            },
            { value: '932', validFor: [], label: '屏東縣 新園鄉' },
            {
              value: '940',
              validFor: [],
              label: '屏東縣 枋寮鄉'
            },
            { value: '941', validFor: [], label: '屏東縣 枋山鄉' },
            {
              value: '942',
              validFor: [],
              label: '屏東縣 春日鄉'
            },
            { value: '943', validFor: [], label: '屏東縣 獅子鄉' },
            {
              value: '944',
              validFor: [],
              label: '屏東縣 車城鄉'
            },
            { value: '945', validFor: [], label: '屏東縣 牡丹鄉' },
            {
              value: '946',
              validFor: [],
              label: '屏東縣 恆春鎮'
            },
            { value: '947', validFor: [], label: '屏東縣 滿洲鄉' },
            {
              value: '950',
              validFor: [],
              label: '台東縣 台東市'
            },
            { value: '951', validFor: [], label: '台東縣 綠島鄉' },
            {
              value: '952',
              validFor: [],
              label: '台東縣 蘭嶼鄉'
            },
            { value: '953', validFor: [], label: '台東縣 延平鄉' },
            {
              value: '954',
              validFor: [],
              label: '台東縣 卑南鄉'
            },
            { value: '955', validFor: [], label: '台東縣 鹿野鄉' },
            {
              value: '956',
              validFor: [],
              label: '台東縣 關山鎮'
            },
            { value: '957', validFor: [], label: '台東縣 海端鄉' },
            {
              value: '958',
              validFor: [],
              label: '台東縣 池上鄉'
            },
            { value: '959', validFor: [], label: '台東縣 東河鄉' },
            {
              value: '961',
              validFor: [],
              label: '台東縣 成功鎮'
            },
            { value: '962', validFor: [], label: '台東縣 長濱鄉' },
            {
              value: '963',
              validFor: [],
              label: '台東縣 太麻里鄉'
            },
            { value: '964', validFor: [], label: '台東縣 金峰鄉' },
            {
              value: '965',
              validFor: [],
              label: '台東縣 大武鄉'
            },
            { value: '966', validFor: [], label: '台東縣 達仁鄉' },
            {
              value: '970',
              validFor: [],
              label: '花蓮縣 花蓮市'
            },
            { value: '971', validFor: [], label: '花蓮縣 新城鄉' },
            {
              value: '972',
              validFor: [],
              label: '花蓮縣 秀林鄉'
            },
            { value: '973', validFor: [], label: '花蓮縣 吉安鄉' },
            {
              value: '974',
              validFor: [],
              label: '花蓮縣 壽豐鄉'
            },
            { value: '975', validFor: [], label: '花蓮縣 鳳林鎮' },
            {
              value: '976',
              validFor: [],
              label: '花蓮縣 光復鄉'
            },
            { value: '977', validFor: [], label: '花蓮縣 豐濱鄉' },
            {
              value: '978',
              validFor: [],
              label: '花蓮縣 瑞穗鄉'
            },
            { value: '979', validFor: [], label: '花蓮縣 萬榮鄉' },
            {
              value: '981',
              validFor: [],
              label: '花蓮縣 玉里鎮'
            },
            { value: '982', validFor: [], label: '花蓮縣 卓溪鄉' },
            {
              value: '983',
              validFor: [],
              label: '花蓮縣 富里鄉'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Account_Link__c/picklist-values/0126F000000A92nQAC/MBTw_Post_Code__c',
          eTag: '3e1d5c1b33bfa4a1fa8ed925f75751d1',
          controllerValues: {}
        },
        PreOwnedVehicleBrand1: {
          values: [
            { value: 'None', validFor: [], label: 'None' },
            {
              value: 'AUDI',
              validFor: [],
              label: 'AUDI'
            },
            { value: 'BMW', validFor: [], label: 'BMW' },
            {
              value: 'BUICK',
              validFor: [],
              label: 'BUICK'
            },
            { value: 'CADILLAC', validFor: [], label: 'CADILLAC' },
            {
              value: 'CHEVROLET',
              validFor: [],
              label: 'CHEVROLET'
            },
            { value: 'CHRYSLER', validFor: [], label: 'CHRYSLER' },
            {
              value: 'FERRARI',
              validFor: [],
              label: 'FERRARI'
            },
            { value: 'FORD', validFor: [], label: 'FORD' },
            {
              value: 'HONDA',
              validFor: [],
              label: 'HONDA'
            },
            { value: 'HUMMER', validFor: [], label: 'HUMMER' },
            {
              value: 'HYUNDAI',
              validFor: [],
              label: 'HYUNDAI'
            },
            { value: 'INFINITI', validFor: [], label: 'INFINITI' },
            {
              value: 'JAGUAR',
              validFor: [],
              label: 'JAGUAR'
            },
            { value: 'JEEP', validFor: [], label: 'JEEP' },
            {
              value: 'LAND ROVER',
              validFor: [],
              label: 'LAND ROVER'
            },
            { value: 'LEXUS', validFor: [], label: 'LEXUS' },
            {
              value: 'LINCOLN',
              validFor: [],
              label: 'LINCOLN'
            },
            { value: 'LOTUS', validFor: [], label: 'LOTUS' },
            {
              value: 'MAYBACH',
              validFor: [],
              label: 'MAYBACH'
            },
            { value: 'MAZDA', validFor: [], label: 'MAZDA' },
            {
              value: 'MB',
              validFor: [],
              label: 'MB'
            },
            { value: 'MINI', validFor: [], label: 'MINI' },
            {
              value: 'MITSUBISHI',
              validFor: [],
              label: 'MITSUBISHI'
            },
            { value: 'NISSAN', validFor: [], label: 'NISSAN' },
            {
              value: 'OPEL',
              validFor: [],
              label: 'OPEL'
            },
            { value: 'PORSCHE', validFor: [], label: 'PORSCHE' },
            {
              value: 'PROTON',
              validFor: [],
              label: 'PROTON'
            },
            { value: 'RENAULT', validFor: [], label: 'RENAULT' },
            {
              value: 'SAAB',
              validFor: [],
              label: 'SAAB'
            },
            { value: 'smart', validFor: [], label: 'smart' },
            {
              value: 'SSANGYONG',
              validFor: [],
              label: 'SSANGYONG'
            },
            { value: 'SUBARU', validFor: [], label: 'SUBARU' },
            {
              value: 'SUZUKI',
              validFor: [],
              label: 'SUZUKI'
            },
            { value: 'TOYOTA', validFor: [], label: 'TOYOTA' },
            {
              value: 'VOLVO',
              validFor: [],
              label: 'VOLVO'
            },
            { value: 'VOLKSWAGEN', validFor: [], label: 'VOLKSWAGEN' },
            {
              value: 'ALFA ROMEO',
              validFor: [],
              label: 'ALFA ROMEO'
            },
            { value: 'ASTON MARTIN', validFor: [], label: 'ASTON MARTIN' },
            {
              value: 'BENTLY',
              validFor: [],
              label: 'BENTLY'
            },
            { value: 'CITROEN', validFor: [], label: 'CITROEN' },
            {
              value: 'DAIHATSU',
              validFor: [],
              label: 'DAIHATSU'
            },
            { value: 'KIA', validFor: [], label: 'KIA' },
            {
              value: 'LAMBORGHINI',
              validFor: [],
              label: 'LAMBORGHINI'
            },
            { value: 'MASERATI', validFor: [], label: 'MASERATI' },
            {
              value: 'PEUGEOT',
              validFor: [],
              label: 'PEUGEOT'
            },
            { value: 'ROLLS ROYCE', validFor: [], label: 'ROLLS ROYCE' },
            {
              value: 'SKODA',
              validFor: [],
              label: 'SKODA'
            },
            { value: 'OTHERS', validFor: [], label: 'OTHERS' },
            { value: '無', validFor: [], label: '無' }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Account_Link__c/picklist-values/0126F000000A92nQAC/RetailPreOwnedVehicleBrand1__c',
          eTag: '14dbdfed9d382ee233daf70f1829c108',
          controllerValues: {}
        },
        PDPAChannel: {
          values: [
            {
              value: 'Web_Customer',
              validFor: [],
              label: '網路_客戶'
            },
            { value: 'Paper/Call-WS', validFor: [], label: '紙本/電話-MBTw' },
            {
              value: 'Paper-Retail',
              validFor: [],
              label: '紙本-經銷商'
            },
            {
              value: 'Data collect,process,use',
              validFor: [],
              label: '資料蒐集, 處理, 利用'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Account_Link__c/picklist-values/0126F000000A92nQAC/RetailPDPAChannel__c',
          eTag: '2f3f670f41823fde93946db8efac498f',
          controllerValues: {}
        },
        PreferredMarketingActivity: {
          values: [
            {
              value: '車主雜誌',
              validFor: [],
              label: '車主雜誌'
            },
            { value: '試乘試駕活動', validFor: [], label: '試乘試駕活動' },
            {
              value: '高爾夫活動',
              validFor: [],
              label: '高爾夫活動'
            },
            { value: '新車發表活動', validFor: [], label: '新車發表活動' },
            {
              value: '賓士信用卡購物/購票優惠',
              validFor: [],
              label: '賓士信用卡購物/購票優惠'
            },
            { value: '藝文活動', validFor: [], label: '藝文活動' },
            {
              value: '理財講座',
              validFor: [],
              label: '理財講座'
            },
            { value: '親子活動', validFor: [], label: '親子活動' },
            {
              value: '手做活動',
              validFor: [],
              label: '手做活動'
            },
            { value: '露營活動', validFor: [], label: '露營活動' },
            {
              value: '路跑活動',
              validFor: [],
              label: '路跑活動'
            },
            { value: '其他', validFor: [], label: '其他' }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Account_Link__c/picklist-values/0126F000000A92nQAC/Preferred_Marketing_Activity__c',
          eTag: '0047f4c9ce671e8d7bfd98cab57c950d',
          controllerValues: {}
        },
        PreferredChannel: {
          values: [
            {
              value: 'Home Phone',
              validFor: [],
              label: '住宅'
            },
            { value: 'Work Phone', validFor: [], label: '公司電話' },
            {
              value: 'Mobile',
              validFor: [],
              label: '行動電話'
            },
            { value: 'Unknown', validFor: [], label: '未知的' }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Account_Link__c/picklist-values/0126F000000A92nQAC/Retail_PreferredChannel__c',
          eTag: '09b311e1152e17a5782947944e017aa3',
          controllerValues: {}
        },
        PreferredContactTime: {
          values: [
            { value: 'AM', validFor: [], label: '上午' },
            {
              value: 'PM',
              validFor: [],
              label: '下午'
            },
            { value: 'Day', validFor: [], label: '全天' },
            {
              value: 'Work Day',
              validFor: [],
              label: '工作日'
            },
            { value: 'Weekend', validFor: [], label: '週末' }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Account_Link__c/picklist-values/0126F000000A92nQAC/RetailPreferredContactTime__c',
          eTag: '165b3851d10402e34468c788f45dffca',
          controllerValues: {}
        },
        Salutation: {
          values: [
            { value: 'Mr', validFor: [], label: '先生' },
            {
              value: 'Miss',
              validFor: [],
              label: '小姐'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Account_Link__c/picklist-values/0126F000000A92nQAC/Retail_Salutation__c',
          eTag: '47bc98887216889e0b542a36cf53327f',
          controllerValues: {}
        }
      },

      fakeEvent
    );
  },

  retrieveLeadMetadata: handler => {
    handler(
      {
        CompetitorClass: {
          values: [
            { value: 'M140i', validFor: [0], label: 'M140i' },
            {
              value: 'RS3',
              validFor: [1],
              label: 'RS3'
            },
            { value: 'Golf R', validFor: [2], label: 'Golf R' },
            {
              value: 'M2',
              validFor: [0],
              label: 'M2'
            },
            { value: 'S5 Sportback', validFor: [1], label: 'S5 Sportback' },
            {
              value: 'RS Q3',
              validFor: [1],
              label: 'RS Q3'
            },
            { value: '335i', validFor: [0], label: '335i' },
            {
              value: '535i/540i (F10/G30)',
              validFor: [0],
              label: '535i/540i (F10/G30)'
            },
            { value: 'GHIBLI', validFor: [3], label: 'GHIBLI' },
            {
              value: 'GHIBLI S Q4',
              validFor: [3],
              label: 'GHIBLI S Q4'
            },
            { value: '440i Coupe', validFor: [0], label: '440i Coupe' },
            {
              value: 'S4 Avant',
              validFor: [1],
              label: 'S4 Avant'
            },
            { value: 'S5 Coupe', validFor: [1], label: 'S5 Coupe' },
            {
              value: 'X4 M40i',
              validFor: [0],
              label: 'X4 M40i'
            },
            { value: 'SQ5', validFor: [1], label: 'SQ5' },
            {
              value: 'MACAN S',
              validFor: [4],
              label: 'MACAN S'
            },
            { value: 'MACAN GTS', validFor: [4], label: 'MACAN GTS' },
            {
              value: 'MACAN TURBO',
              validFor: [4],
              label: 'MACAN TURBO'
            },
            { value: 'X6 xDrive35i', validFor: [0], label: 'X6 xDrive35i' },
            {
              value: 'CAYENNE S',
              validFor: [4],
              label: 'CAYENNE S'
            },
            { value: 'CAYENNE GTS', validFor: [4], label: 'CAYENNE GTS' },
            {
              value: 'LEVANTE',
              validFor: [3],
              label: 'LEVANTE'
            },
            { value: 'LEVANTE S', validFor: [3], label: 'LEVANTE S' },
            {
              value: 'Z4 sDrive35is',
              validFor: [0],
              label: 'Z4 sDrive35is'
            },
            { value: 'TTS', validFor: [1], label: 'TTS' },
            {
              value: 'BOXSTER S',
              validFor: [4],
              label: 'BOXSTER S'
            },
            { value: 'CAYMAN S', validFor: [4], label: 'CAYMAN S' },
            {
              value: 'M3 Sedan',
              validFor: [0],
              label: 'M3 Sedan'
            },
            { value: 'RS4 Sedan', validFor: [1], label: 'RS4 Sedan' },
            {
              value: 'IS-F',
              validFor: [5],
              label: 'IS-F'
            },
            { value: 'RS6 Sedan', validFor: [1], label: 'RS6 Sedan' },
            {
              value: 'M5 Sedan',
              validFor: [0],
              label: 'M5 Sedan'
            },
            {
              value: 'ALPINA B10',
              validFor: [0],
              label: 'ALPINA B10'
            },
            {
              value: 'Others (CADILLAC CTS-V, JAGUAR XFR, GS F)',
              validFor: [6],
              label: 'Others (CADILLAC CTS-V, JAGUAR XFR, GS F)'
            },
            { value: 'RS5 Coupe', validFor: [1], label: 'RS5 Coupe' },
            {
              value: 'M4 Coupe',
              validFor: [0],
              label: 'M4 Coupe'
            },
            {
              value: 'Others (Nissan GT-R; RCF)',
              validFor: [7],
              label: 'Others (Nissan GT-R; RCF)'
            },
            { value: 'GT MC STRADALE', validFor: [3], label: 'GT MC STRADALE' },
            {
              value: 'M6 Coupe',
              validFor: [0],
              label: 'M6 Coupe'
            },
            {
              value: 'Continental GT V8 (S)',
              validFor: [8],
              label: 'Continental GT V8 (S)'
            },
            { value: 'X5 M (E70)', validFor: [0], label: 'X5 M (E70)' },
            {
              value: 'X6 M',
              validFor: [0],
              label: 'X6 M'
            },
            {
              value: 'CAYENNE TURBO (S)',
              validFor: [4],
              label: 'CAYENNE TURBO (S)'
            },
            {
              value: 'Bentayga',
              validFor: [8],
              label: 'Bentayga'
            },
            { value: 'R8', validFor: [1], label: 'R8' },
            {
              value: '911 Family',
              validFor: [4],
              label: '911 Family'
            },
            { value: '1-Series', validFor: [0], label: '1-Series' },
            {
              value: 'A3 Sportback',
              validFor: [1],
              label: 'A3 Sportback'
            },
            { value: 'CT Series', validFor: [5], label: 'CT Series' },
            {
              value: '2 series',
              validFor: [0],
              label: '2 series'
            },
            { value: '4er Gran Coupe', validFor: [0], label: '4er Gran Coupe' },
            {
              value: 'A5 Sportback',
              validFor: [1],
              label: 'A5 Sportback'
            },
            { value: 'X1', validFor: [0], label: 'X1' },
            {
              value: 'Q3',
              validFor: [1],
              label: 'Q3'
            },
            { value: '3-Series', validFor: [0], label: '3-Series' },
            {
              value: 'A4',
              validFor: [1],
              label: 'A4'
            },
            { value: 'IS,ES-Series', validFor: [5], label: 'IS,ES-Series' },
            {
              value: '5-Series',
              validFor: [0],
              label: '5-Series'
            },
            { value: 'A6', validFor: [1], label: 'A6' },
            {
              value: 'GS-Series',
              validFor: [5],
              label: 'GS-Series'
            },
            { value: '7-Series', validFor: [0], label: '7-Series' },
            {
              value: 'A8',
              validFor: [1],
              label: 'A8'
            },
            { value: 'LS series', validFor: [5], label: 'LS series' },
            {
              value: 'PANAMERA Turbo Executive',
              validFor: [4],
              label: 'PANAMERA Turbo Executive'
            },
            { value: 'X3', validFor: [0], label: 'X3' },
            {
              value: 'Q5',
              validFor: [1],
              label: 'Q5'
            },
            { value: 'NX', validFor: [5], label: 'NX' },
            {
              value: 'NX200',
              validFor: [5],
              label: 'NX200'
            },
            { value: 'NX300', validFor: [5], label: 'NX300' },
            {
              value: 'NX300h',
              validFor: [5],
              label: 'NX300h'
            },
            { value: 'Macan', validFor: [4], label: 'Macan' },
            {
              value: 'X4',
              validFor: [0],
              label: 'X4'
            },
            { value: 'X5', validFor: [0], label: 'X5' },
            {
              value: 'Q7',
              validFor: [1],
              label: 'Q7'
            },
            { value: 'RX', validFor: [5], label: 'RX' },
            {
              value: 'CAYENNE',
              validFor: [4],
              label: 'CAYENNE'
            },
            { value: 'X6', validFor: [0], label: 'X6' },
            {
              value: 'LX',
              validFor: [5],
              label: 'LX'
            },
            { value: '3er, 4er Coupe', validFor: [0], label: '3er, 4er Coupe' },
            {
              value: 'A4 A5 coupe',
              validFor: [1],
              label: 'A4 A5 coupe'
            },
            { value: 'RCF', validFor: [5], label: 'RCF' },
            {
              value: '6er Coupe',
              validFor: [0],
              label: '6er Coupe'
            },
            { value: 'LC', validFor: [5], label: 'LC' },
            {
              value: '6er Gran Coupe',
              validFor: [0],
              label: '6er Gran Coupe'
            },
            { value: 'A7 coupe', validFor: [1], label: 'A7 coupe' },
            {
              value: 'Panamera',
              validFor: [4],
              label: 'Panamera'
            },
            { value: '3-Series, 3GT', validFor: [0], label: '3-Series, 3GT' },
            {
              value: '5eries, 5GT',
              validFor: [0],
              label: '5eries, 5GT'
            },
            { value: 'Audi-A6', validFor: [1], label: 'Audi-A6' },
            {
              value: 'Z4',
              validFor: [0],
              label: 'Z4'
            },
            { value: 'TT', validFor: [1], label: 'TT' },
            {
              value: 'Boxster/CAYMAN',
              validFor: [4],
              label: 'Boxster/CAYMAN'
            },
            { value: 'i8', validFor: [0], label: 'i8' },
            { value: '911', validFor: [4], label: '911' }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Lead__c/picklist-values/0120k0000004oReAAI/Tw_Competitor_Class__c',
          eTag: 'b40b63f568c5fdfb68ed066976b5a0e5',
          controllerValues: {
            Bentley: 8,
            'Others (Nissan GT-R; Lexus)': 7,
            'Others (CADILLAC CTS-V, JAGUAR XFR, Lexus)': 6,
            Lexus: 5,
            Porsche: 4,
            MASERATI: 3,
            Volkswagen: 2,
            Audi: 1,
            BMW: 0
          }
        },
        CompetitorBrand: {
          values: [
            { value: 'BMW', validFor: [], label: 'BMW' },
            {
              value: 'Audi',
              validFor: [],
              label: 'Audi'
            },
            { value: 'Volkswagen', validFor: [], label: 'Volkswagen' },
            {
              value: 'MASERATI',
              validFor: [],
              label: 'MASERATI'
            },
            { value: 'Porsche', validFor: [], label: 'Porsche' },
            {
              value: 'Lexus',
              validFor: [],
              label: 'Lexus'
            },
            {
              value: 'Others (CADILLAC CTS-V, JAGUAR XFR, Lexus)',
              validFor: [],
              label: 'Others (CADILLAC CTS-V, JAGUAR XFR, Lexus)'
            },
            {
              value: 'Others (Nissan GT-R; Lexus)',
              validFor: [],
              label: 'Others (Nissan GT-R; Lexus)'
            },
            { value: 'Bentley', validFor: [], label: 'Bentley' }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Lead__c/picklist-values/0120k0000004oReAAI/Tw_Competitor_Brand__c',
          eTag: '5684bad0459e9419a3e89f8082477b62',
          controllerValues: {}
        },
        Usage: {
          values: [
            { value: 'all', validFor: [], label: '全部' },
            {
              value: 'Use for family',
              validFor: [],
              label: '個人用車'
            },
            { value: 'Use for company', validFor: [], label: '營業用車' },
            {
              value: 'Use for business',
              validFor: [],
              label: '營業用車'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Lead__c/picklist-values/0120k0000004oReAAI/Retail_Usage__c',
          eTag: '09f3b96ad9898fa3bbbe1b5e9a9f7930',
          controllerValues: {}
        },
        Model3: {
          values: [
            { value: 'A180', validFor: [0, 1], label: 'A180' },
            {
              value: 'A180 AMG LINE',
              validFor: [0],
              label: 'A180 AMG LINE'
            },
            { value: 'A250 SPORT', validFor: [0], label: 'A250 SPORT' },
            {
              value: 'A200',
              validFor: [1],
              label: 'A200'
            },
            { value: 'A220', validFor: [1], label: 'A220' },
            {
              value: 'A250',
              validFor: [1],
              label: 'A250'
            },
            { value: 'A180 SED', validFor: [2], label: 'A180 SED' },
            {
              value: 'A200 SED',
              validFor: [2],
              label: 'A200 SED'
            },
            { value: 'B180', validFor: [3, 4], label: 'B180' },
            {
              value: 'B180 AMG LINE',
              validFor: [3],
              label: 'B180 AMG LINE'
            },
            { value: 'B200', validFor: [3, 4], label: 'B200' },
            {
              value: 'B200 d',
              validFor: [3],
              label: 'B200 d'
            },
            { value: 'C200 Cabrio', validFor: [5], label: 'C200 Cabrio' },
            {
              value: 'C180',
              validFor: [6],
              label: 'C180'
            },
            { value: 'C200', validFor: [6], label: 'C200' },
            {
              value: 'C200 d',
              validFor: [6],
              label: 'C200 d'
            },
            { value: 'C200 AVA', validFor: [6], label: 'C200 AVA' },
            {
              value: 'C200 EXCLUSIVE',
              validFor: [6],
              label: 'C200 EXCLUSIVE'
            },
            { value: 'C250 AMG', validFor: [6], label: 'C250 AMG' },
            {
              value: 'C300',
              validFor: [6],
              label: 'C300'
            },
            { value: 'C180 C', validFor: [7], label: 'C180 C' },
            {
              value: 'C250 C',
              validFor: [7],
              label: 'C250 C'
            },
            { value: 'C300 C', validFor: [7], label: 'C300 C' },
            {
              value: 'C180 T',
              validFor: [8],
              label: 'C180 T'
            },
            { value: 'C200 T', validFor: [8], label: 'C200 T' },
            {
              value: 'C250 T',
              validFor: [8],
              label: 'C250 T'
            },
            { value: 'C300 T', validFor: [8], label: 'C300 T' },
            {
              value: 'CLA200',
              validFor: [9, 10],
              label: 'CLA200'
            },
            { value: 'CLA250', validFor: [9, 10], label: 'CLA250' },
            {
              value: 'CLA200 SB',
              validFor: [11],
              label: 'CLA200 SB'
            },
            { value: 'CLA250 SB', validFor: [11], label: 'CLA250 SB' },
            {
              value: 'CLS350',
              validFor: [12],
              label: 'CLS350'
            },
            { value: 'E200 AVA', validFor: [13], label: 'E200 AVA' },
            {
              value: 'E200 AVA LUX',
              validFor: [13],
              label: 'E200 AVA LUX'
            },
            { value: 'E220 d AVA', validFor: [13], label: 'E220 d AVA' },
            {
              value: 'E250 AVA',
              validFor: [13],
              label: 'E250 AVA'
            },
            { value: 'E250 EXCL', validFor: [13], label: 'E250 EXCL' },
            {
              value: 'E250 AMG LINE',
              validFor: [13],
              label: 'E250 AMG LINE'
            },
            { value: 'E300 AVA', validFor: [13], label: 'E300 AVA' },
            {
              value: 'E300 EXCLUSIVE',
              validFor: [13],
              label: 'E300 EXCLUSIVE'
            },
            { value: 'E300 AMG LINE', validFor: [13], label: 'E300 AMG LINE' },
            {
              value: 'E200 C',
              validFor: [14],
              label: 'E200 C'
            },
            { value: 'E300 C', validFor: [14], label: 'E300 C' },
            {
              value: 'E400 4M C',
              validFor: [14],
              label: 'E400 4M C'
            },
            { value: 'E200 AVA T', validFor: [15], label: 'E200 AVA T' },
            {
              value: 'E220 d AVA T',
              validFor: [15],
              label: 'E220 d AVA T'
            },
            { value: 'E300 AVA T', validFor: [15], label: 'E300 AVA T' },
            {
              value: 'G350 d',
              validFor: [16],
              label: 'G350 d'
            },
            { value: 'G500 L', validFor: [16], label: 'G500 L' },
            {
              value: 'GLA180',
              validFor: [17],
              label: 'GLA180'
            },
            {
              value: 'GLA180 AMGLINE',
              validFor: [17],
              label: 'GLA180 AMGLINE'
            },
            {
              value: 'GLA200',
              validFor: [17],
              label: 'GLA200'
            },
            { value: 'GLA200 d', validFor: [17], label: 'GLA200 d' },
            {
              value: 'GLC200',
              validFor: [18],
              label: 'GLC200'
            },
            { value: 'GLC220 d 4M', validFor: [18], label: 'GLC220 d 4M' },
            {
              value: 'GLC250 4M',
              validFor: [18],
              label: 'GLC250 4M'
            },
            {
              value: 'GLC250 4M AMGLINE',
              validFor: [18],
              label: 'GLC250 4M AMGLINE'
            },
            {
              value: 'GLC200 C',
              validFor: [19],
              label: 'GLC200 C'
            },
            { value: 'GLC250 4M C', validFor: [19], label: 'GLC250 4M C' },
            {
              value: 'GLC250 4M AMG C',
              validFor: [19],
              label: 'GLC250 4M AMG C'
            },
            { value: 'GLE250 d 4M', validFor: [20], label: 'GLE250 d 4M' },
            {
              value: 'GLE350 d 4M',
              validFor: [20],
              label: 'GLE350 d 4M'
            },
            { value: 'GLE400 4M', validFor: [20], label: 'GLE400 4M' },
            {
              value: 'GLE300 d 4M',
              validFor: [21],
              label: 'GLE300 d 4M'
            },
            { value: 'GLE400 d 4M', validFor: [21], label: 'GLE400 d 4M' },
            {
              value: 'GLE 450 4M',
              validFor: [21],
              label: 'GLE 450 4M'
            },
            { value: 'GLE350 d 4M C', validFor: [22], label: 'GLE350 d 4M C' },
            {
              value: 'GLS350 d 4M',
              validFor: [23, 24],
              label: 'GLS350 d 4M'
            },
            { value: 'S350 d', validFor: [25], label: 'S350 d' },
            {
              value: 'S350 d L',
              validFor: [25],
              label: 'S350 d L'
            },
            { value: 'S450 L', validFor: [25], label: 'S450 L' },
            {
              value: 'S560 L',
              validFor: [25],
              label: 'S560 L'
            },
            { value: 'S560e L', validFor: [25], label: 'S560e L' },
            {
              value: 'S500 C',
              validFor: [26],
              label: 'S500 C'
            },
            { value: 'S560 C', validFor: [26], label: 'S560 C' },
            {
              value: 'SL400',
              validFor: [27],
              label: 'SL400'
            },
            { value: 'SLC200', validFor: [28], label: 'SLC200' },
            {
              value: 'V220 d',
              validFor: [29],
              label: 'V220 d'
            },
            { value: 'V250 d', validFor: [29], label: 'V250 d' },
            {
              value: 'V250 d AVA',
              validFor: [29],
              label: 'V250 d AVA'
            },
            {
              value: 'V250d AMG LINE',
              validFor: [29],
              label: 'V250d AMG LINE'
            },
            {
              value: 'VITO TOURER',
              validFor: [30],
              label: 'VITO TOURER'
            },
            {
              value: 'VITO TOURER 120KW',
              validFor: [30],
              label: 'VITO TOURER 120KW'
            },
            {
              value: 'M-AMG A45 4M',
              validFor: [0],
              label: 'M-AMG A45 4M'
            },
            { value: 'M-AMG A35 4M', validFor: [1], label: 'M-AMG A35 4M' },
            {
              value: 'M-AMG A45 S 4M',
              validFor: [1],
              label: 'M-AMG A45 S 4M'
            },
            {
              value: 'M-AMG C43 4M Cabrio',
              validFor: [5],
              label: 'M-AMG C43 4M Cabrio'
            },
            { value: 'M-AMG C43 4M', validFor: [6], label: 'M-AMG C43 4M' },
            {
              value: 'M-AMG C63',
              validFor: [6],
              label: 'M-AMG C63'
            },
            { value: 'M-AMG C63 S', validFor: [6], label: 'M-AMG C63 S' },
            {
              value: 'M-AMG C43 4M C',
              validFor: [7],
              label: 'M-AMG C43 4M C'
            },
            { value: 'M-AMG C63 C', validFor: [7], label: 'M-AMG C63 C' },
            {
              value: 'M-AMG C63 S C',
              validFor: [7],
              label: 'M-AMG C63 S C'
            },
            { value: 'M-AMG C43 4M T', validFor: [8], label: 'M-AMG C43 4M T' },
            {
              value: 'M-A CLA45 4M',
              validFor: [9],
              label: 'M-A CLA45 4M'
            },
            {
              value: 'M-AMG CLA35 4M',
              validFor: [10],
              label: 'M-AMG CLA35 4M'
            },
            {
              value: 'M-AMG CLA45 S 4M',
              validFor: [10],
              label: 'M-AMG CLA45 S 4M'
            },
            {
              value: 'M-A CLA45 4M SB',
              validFor: [11],
              label: 'M-A CLA45 4M SB'
            },
            {
              value: 'M-AMG CLS53 4M',
              validFor: [12],
              label: 'M-AMG CLS53 4M'
            },
            { value: 'M-AMG E43 4M', validFor: [13], label: 'M-AMG E43 4M' },
            {
              value: 'M-AMG E53 4M',
              validFor: [13],
              label: 'M-AMG E53 4M'
            },
            { value: 'M-AMG E63 4M', validFor: [13], label: 'M-AMG E63 4M' },
            {
              value: 'M-AMG E63 S 4M',
              validFor: [13],
              label: 'M-AMG E63 S 4M'
            },
            {
              value: 'M-AMG E53 4M C',
              validFor: [14],
              label: 'M-AMG E53 4M C'
            },
            {
              value: 'M-AMG G63 L',
              validFor: [16],
              label: 'M-AMG G63 L'
            },
            {
              value: 'M-AMG GLA45 4M FL',
              validFor: [17],
              label: 'M-AMG GLA45 4M FL'
            },
            {
              value: 'M-AMG GLC43 4M',
              validFor: [18],
              label: 'M-AMG GLC43 4M'
            },
            {
              value: 'M-AMG GLC63 4M',
              validFor: [18],
              label: 'M-AMG GLC63 4M'
            },
            {
              value: 'M-AMG GLC43 4M C',
              validFor: [19],
              label: 'M-AMG GLC43 4M C'
            },
            {
              value: 'M-AMG GLC63 S 4M C',
              validFor: [19],
              label: 'M-AMG GLC63 S 4M C'
            },
            {
              value: 'M-AMG GLE43 4M C',
              validFor: [22],
              label: 'M-AMG GLE43 4M C'
            },
            {
              value: 'M-AMG GLE63 4M C',
              validFor: [22],
              label: 'M-AMG GLE63 4M C'
            },
            {
              value: 'M-AMG GLS63 4M',
              validFor: [23],
              label: 'M-AMG GLS63 4M'
            },
            { value: 'M-AMG GT', validFor: [31], label: 'M-AMG GT' },
            {
              value: 'M-AMG GT C',
              validFor: [31],
              label: 'M-AMG GT C'
            },
            { value: 'M-AMG GT S', validFor: [31], label: 'M-AMG GT S' },
            {
              value: 'M-AMG GT R',
              validFor: [31],
              label: 'M-AMG GT R'
            },
            {
              value: 'M-AMG GT 43 4M',
              validFor: [32],
              label: 'M-AMG GT 43 4M'
            },
            {
              value: 'M-AMG GT 53 4M',
              validFor: [32],
              label: 'M-AMG GT 53 4M'
            },
            {
              value: 'M-AMG GT 63 4M',
              validFor: [32],
              label: 'M-AMG GT 63 4M'
            },
            {
              value: 'M-AMG GT 63 S 4M',
              validFor: [32],
              label: 'M-AMG GT 63 S 4M'
            },
            {
              value: 'M-AMG GT ROADSTER',
              validFor: [33],
              label: 'M-AMG GT ROADSTER'
            },
            {
              value: 'M-AMG S63 4M C',
              validFor: [26],
              label: 'M-AMG S63 4M C'
            },
            {
              value: 'M-AMG SLC43',
              validFor: [28],
              label: 'M-AMG SLC43'
            },
            {
              value: 'M-MAYBACH S560',
              validFor: [34],
              label: 'M-MAYBACH S560'
            },
            {
              value: 'M-MAYBACH S650',
              validFor: [34],
              label: 'M-MAYBACH S650'
            },
            {
              value: 'C453 52KW PURE',
              validFor: [35],
              label: 'C453 52KW PURE'
            },
            {
              value: 'C453 52KW PASSION',
              validFor: [35],
              label: 'C453 52KW PASSION'
            },
            {
              value: 'C453 BRABUS 80KW',
              validFor: [35],
              label: 'C453 BRABUS 80KW'
            },
            {
              value: 'W453 52KW PURE',
              validFor: [36],
              label: 'W453 52KW PURE'
            },
            {
              value: 'W453 66KW PURE',
              validFor: [36],
              label: 'W453 66KW PURE'
            },
            {
              value: 'W453 66KW PASSION',
              validFor: [36],
              label: 'W453 66KW PASSION'
            },
            {
              value: 'Mercedes-Benz Select',
              validFor: [37],
              label: 'Mercedes-Benz Select'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Lead__c/picklist-values/0120k0000004oReAAI/TWRetailInterestedModel3__c',
          eTag: 'e1cb6095ed1f67947dbdb5607e9f42c4',
          controllerValues: {
            'Mercedes-Benz Select': 37,
            'forfour (W453)': 36,
            'fortwo (C453)': 35,
            'Maybach (X222)': 34,
            'GT Roadster (R190)': 33,
            'GT (X290)': 32,
            'GT (C190)': 31,
            'Vito (Vito VS20)': 30,
            'V-Class (V-Class VS20)': 29,
            'SLC (R172)': 28,
            'SL (R231)': 27,
            'S Coupe (C217)': 26,
            'S-Class (W/V222)': 25,
            'GLS (X167)': 24,
            'GLS (X166)': 23,
            'GLE Coupe (C292)': 22,
            'GLE (V167)': 21,
            'GLE (W166)': 20,
            'GLC Coupe (C253)': 19,
            'GLC (X253)': 18,
            'GLA (X156)': 17,
            'G-Class (W463)': 16,
            'E Estate (S213)': 15,
            'E Coupe (C238)': 14,
            'E-Class (W213)': 13,
            'CLS (C257)': 12,
            'CLA SB (X117)': 11,
            'CLA (C118)': 10,
            'CLA (C117)': 9,
            'C Estate (S205)': 8,
            'C Coupe (C205)': 7,
            'C-Class (W205)': 6,
            'C Cabrio (A205)': 5,
            'B-Class (W247)': 4,
            'B-Class (W246)': 3,
            'A-Class (V177)': 2,
            'A-Class (W177)': 1,
            'A-Class (W176)': 0
          }
        },
        Class3: {
          values: [
            {
              value: 'A-Class (W176)',
              validFor: [0, 1],
              label: 'A-Class (W176)'
            },
            {
              value: 'A-Class (W177)',
              validFor: [0, 1],
              label: 'A-Class (W177)'
            },
            {
              value: 'A-Class (V177)',
              validFor: [0],
              label: 'A-Class (V177)'
            },
            { value: 'B-Class (W246)', validFor: [0], label: 'B-Class (W246)' },
            {
              value: 'B-Class (W247)',
              validFor: [0],
              label: 'B-Class (W247)'
            },
            {
              value: 'C Cabrio (A205)',
              validFor: [0, 1],
              label: 'C Cabrio (A205)'
            },
            {
              value: 'C-Class (W205)',
              validFor: [0, 1],
              label: 'C-Class (W205)'
            },
            {
              value: 'C Coupe (C205)',
              validFor: [0, 1],
              label: 'C Coupe (C205)'
            },
            {
              value: 'C Estate (S205)',
              validFor: [0, 1],
              label: 'C Estate (S205)'
            },
            { value: 'CLA (C117)', validFor: [0, 1], label: 'CLA (C117)' },
            {
              value: 'CLA (C118)',
              validFor: [0, 1],
              label: 'CLA (C118)'
            },
            {
              value: 'CLA SB (X117)',
              validFor: [0, 1],
              label: 'CLA SB (X117)'
            },
            {
              value: 'CLS (C257)',
              validFor: [0, 1],
              label: 'CLS (C257)'
            },
            {
              value: 'E-Class (W213)',
              validFor: [0, 1],
              label: 'E-Class (W213)'
            },
            {
              value: 'E Coupe (C238)',
              validFor: [0, 1],
              label: 'E Coupe (C238)'
            },
            {
              value: 'E Estate (S213)',
              validFor: [0],
              label: 'E Estate (S213)'
            },
            {
              value: 'G-Class (W463)',
              validFor: [0, 1],
              label: 'G-Class (W463)'
            },
            { value: 'GLA (X156)', validFor: [0, 1], label: 'GLA (X156)' },
            {
              value: 'GLC (X253)',
              validFor: [0, 1],
              label: 'GLC (X253)'
            },
            {
              value: 'GLC Coupe (C253)',
              validFor: [0, 1],
              label: 'GLC Coupe (C253)'
            },
            {
              value: 'GLE (W166)',
              validFor: [0],
              label: 'GLE (W166)'
            },
            { value: 'GLE (V167)', validFor: [0], label: 'GLE (V167)' },
            {
              value: 'GLE Coupe (C292)',
              validFor: [0, 1],
              label: 'GLE Coupe (C292)'
            },
            { value: 'GLS (X166)', validFor: [0, 1], label: 'GLS (X166)' },
            {
              value: 'GLS (X167)',
              validFor: [0],
              label: 'GLS (X167)'
            },
            {
              value: 'S-Class (W/V222)',
              validFor: [0],
              label: 'S-Class (W/V222)'
            },
            {
              value: 'S Coupe (C217)',
              validFor: [0, 1],
              label: 'S Coupe (C217)'
            },
            { value: 'SL (R231)', validFor: [0], label: 'SL (R231)' },
            {
              value: 'SLC (R172)',
              validFor: [0, 1],
              label: 'SLC (R172)'
            },
            {
              value: 'V-Class (V-Class VS20)',
              validFor: [0],
              label: 'V-Class (V-Class VS20)'
            },
            {
              value: 'Vito (Vito VS20)',
              validFor: [0],
              label: 'Vito (Vito VS20)'
            },
            {
              value: 'GT (C190)',
              validFor: [1],
              label: 'GT (C190)'
            },
            { value: 'GT (X290)', validFor: [1], label: 'GT (X290)' },
            {
              value: 'GT Roadster (R190)',
              validFor: [1],
              label: 'GT Roadster (R190)'
            },
            { value: 'Maybach (X222)', validFor: [2], label: 'Maybach (X222)' },
            {
              value: 'fortwo (C453)',
              validFor: [3],
              label: 'fortwo (C453)'
            },
            {
              value: 'forfour (W453)',
              validFor: [3],
              label: 'forfour (W453)'
            },
            {
              value: 'Mercedes-Benz Select',
              validFor: [4],
              label: 'Mercedes-Benz Select'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Lead__c/picklist-values/0120k0000004oReAAI/TWRetailInterestedClass3__c',
          eTag: '9975ed22603d3ff40a900a08eea08526',
          controllerValues: {
            'Mercedes-Benz Select': 4,
            smart: 3,
            'Mercedes-Maybach': 2,
            'Mercedes-AMG': 1,
            'Mercedes-Benz': 0
          }
        },
        Brand3: {
          values: [
            {
              value: 'Mercedes-Benz',
              validFor: [],
              label: 'Mercedes-Benz'
            },
            { value: 'Mercedes-AMG', validFor: [], label: 'Mercedes-AMG' },
            {
              value: 'Mercedes-Maybach',
              validFor: [],
              label: 'Mercedes-Maybach'
            },
            { value: 'smart', validFor: [], label: 'smart' },
            {
              value: 'Mercedes-Benz Select',
              validFor: [],
              label: 'Mercedes-Benz Select'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Lead__c/picklist-values/0120k0000004oReAAI/TWRetailInterestedBrand3__c',
          eTag: '2e42edec70a9ed8b6223922dbe8b3861',
          controllerValues: {}
        },
        Model2: {
          values: [
            { value: 'A180', validFor: [0, 1], label: 'A180' },
            {
              value: 'A180 AMG LINE',
              validFor: [0],
              label: 'A180 AMG LINE'
            },
            { value: 'A250 SPORT', validFor: [0], label: 'A250 SPORT' },
            {
              value: 'A200',
              validFor: [1],
              label: 'A200'
            },
            { value: 'A220', validFor: [1], label: 'A220' },
            {
              value: 'A250',
              validFor: [1],
              label: 'A250'
            },
            { value: 'A180 SED', validFor: [2], label: 'A180 SED' },
            {
              value: 'A200 SED',
              validFor: [2],
              label: 'A200 SED'
            },
            { value: 'B180', validFor: [3, 4], label: 'B180' },
            {
              value: 'B180 AMG LINE',
              validFor: [3],
              label: 'B180 AMG LINE'
            },
            { value: 'B200', validFor: [3, 4], label: 'B200' },
            {
              value: 'B200 d',
              validFor: [3],
              label: 'B200 d'
            },
            { value: 'C200 Cabrio', validFor: [5], label: 'C200 Cabrio' },
            {
              value: 'C180',
              validFor: [6],
              label: 'C180'
            },
            { value: 'C200', validFor: [6], label: 'C200' },
            {
              value: 'C200 d',
              validFor: [6],
              label: 'C200 d'
            },
            { value: 'C200 AVA', validFor: [6], label: 'C200 AVA' },
            {
              value: 'C200 EXCLUSIVE',
              validFor: [6],
              label: 'C200 EXCLUSIVE'
            },
            { value: 'C250 AMG', validFor: [6], label: 'C250 AMG' },
            {
              value: 'C300',
              validFor: [6],
              label: 'C300'
            },
            { value: 'C180 C', validFor: [7], label: 'C180 C' },
            {
              value: 'C250 C',
              validFor: [7],
              label: 'C250 C'
            },
            { value: 'C300 C', validFor: [7], label: 'C300 C' },
            {
              value: 'C180 T',
              validFor: [8],
              label: 'C180 T'
            },
            { value: 'C200 T', validFor: [8], label: 'C200 T' },
            {
              value: 'C250 T',
              validFor: [8],
              label: 'C250 T'
            },
            { value: 'C300 T', validFor: [8], label: 'C300 T' },
            {
              value: 'CLA200',
              validFor: [9, 10],
              label: 'CLA200'
            },
            { value: 'CLA250', validFor: [9, 10], label: 'CLA250' },
            {
              value: 'CLA200 SB',
              validFor: [11],
              label: 'CLA200 SB'
            },
            { value: 'CLA250 SB', validFor: [11], label: 'CLA250 SB' },
            {
              value: 'CLS350',
              validFor: [12],
              label: 'CLS350'
            },
            { value: 'E200 AVA', validFor: [13], label: 'E200 AVA' },
            {
              value: 'E200 AVA LUX',
              validFor: [13],
              label: 'E200 AVA LUX'
            },
            { value: 'E220 d AVA', validFor: [13], label: 'E220 d AVA' },
            {
              value: 'E250 AVA',
              validFor: [13],
              label: 'E250 AVA'
            },
            { value: 'E250 EXCL', validFor: [13], label: 'E250 EXCL' },
            {
              value: 'E250 AMG LINE',
              validFor: [13],
              label: 'E250 AMG LINE'
            },
            { value: 'E300 AVA', validFor: [13], label: 'E300 AVA' },
            {
              value: 'E300 EXCLUSIVE',
              validFor: [13],
              label: 'E300 EXCLUSIVE'
            },
            { value: 'E300 AMG LINE', validFor: [13], label: 'E300 AMG LINE' },
            {
              value: 'E200 C',
              validFor: [14],
              label: 'E200 C'
            },
            { value: 'E300 C', validFor: [14], label: 'E300 C' },
            {
              value: 'E400 4M C',
              validFor: [14],
              label: 'E400 4M C'
            },
            { value: 'E200 AVA T', validFor: [15], label: 'E200 AVA T' },
            {
              value: 'E220 d AVA T',
              validFor: [15],
              label: 'E220 d AVA T'
            },
            { value: 'E300 AVA T', validFor: [15], label: 'E300 AVA T' },
            {
              value: 'G350 d',
              validFor: [16],
              label: 'G350 d'
            },
            { value: 'G500 L', validFor: [16], label: 'G500 L' },
            {
              value: 'GLA180',
              validFor: [17],
              label: 'GLA180'
            },
            {
              value: 'GLA180 AMGLINE',
              validFor: [17],
              label: 'GLA180 AMGLINE'
            },
            {
              value: 'GLA200',
              validFor: [17],
              label: 'GLA200'
            },
            { value: 'GLA200 d', validFor: [17], label: 'GLA200 d' },
            {
              value: 'GLC200',
              validFor: [18],
              label: 'GLC200'
            },
            { value: 'GLC220 d 4M', validFor: [18], label: 'GLC220 d 4M' },
            {
              value: 'GLC250 4M',
              validFor: [18],
              label: 'GLC250 4M'
            },
            {
              value: 'GLC250 4M AMGLINE',
              validFor: [18],
              label: 'GLC250 4M AMGLINE'
            },
            {
              value: 'GLC200 C',
              validFor: [19],
              label: 'GLC200 C'
            },
            { value: 'GLC250 4M C', validFor: [19], label: 'GLC250 4M C' },
            {
              value: 'GLC250 4M AMG C',
              validFor: [19],
              label: 'GLC250 4M AMG C'
            },
            { value: 'GLE250 d 4M', validFor: [20], label: 'GLE250 d 4M' },
            {
              value: 'GLE350 d 4M',
              validFor: [20, 21],
              label: 'GLE350 d 4M'
            },
            { value: 'GLE400 4M', validFor: [20], label: 'GLE400 4M' },
            {
              value: 'GLE300 d 4M',
              validFor: [21],
              label: 'GLE300 d 4M'
            },
            { value: 'GLE400 d 4M', validFor: [21], label: 'GLE400 d 4M' },
            {
              value: 'GLE 450 4M',
              validFor: [21],
              label: 'GLE 450 4M'
            },
            { value: 'GLE350 d 4M C', validFor: [22], label: 'GLE350 d 4M C' },
            {
              value: 'GLS350 d 4M',
              validFor: [23, 24],
              label: 'GLS350 d 4M'
            },
            { value: 'S350 d', validFor: [25], label: 'S350 d' },
            {
              value: 'S350 d L',
              validFor: [25],
              label: 'S350 d L'
            },
            { value: 'S450 L', validFor: [25], label: 'S450 L' },
            {
              value: 'S560 L',
              validFor: [25],
              label: 'S560 L'
            },
            { value: 'S560e L', validFor: [25], label: 'S560e L' },
            {
              value: 'S500 C',
              validFor: [26],
              label: 'S500 C'
            },
            { value: 'S560 C', validFor: [26], label: 'S560 C' },
            {
              value: 'SL400',
              validFor: [27],
              label: 'SL400'
            },
            { value: 'SLC200', validFor: [28], label: 'SLC200' },
            {
              value: 'V220 d',
              validFor: [29],
              label: 'V220 d'
            },
            { value: 'V250 d', validFor: [29], label: 'V250 d' },
            {
              value: 'V250 d AVA',
              validFor: [29],
              label: 'V250 d AVA'
            },
            {
              value: 'V250d AMG LINE',
              validFor: [29],
              label: 'V250d AMG LINE'
            },
            {
              value: 'VITO TOURER',
              validFor: [30],
              label: 'VITO TOURER'
            },
            {
              value: 'VITO TOURER 120KW',
              validFor: [30],
              label: 'VITO TOURER 120KW'
            },
            {
              value: 'M-AMG A45 4M',
              validFor: [0],
              label: 'M-AMG A45 4M'
            },
            { value: 'M-AMG A35 4M', validFor: [1], label: 'M-AMG A35 4M' },
            {
              value: 'M-AMG A45 S 4M',
              validFor: [1],
              label: 'M-AMG A45 S 4M'
            },
            {
              value: 'M-AMG C43 4M Cabrio',
              validFor: [5],
              label: 'M-AMG C43 4M Cabrio'
            },
            { value: 'M-AMG C43 4M', validFor: [6], label: 'M-AMG C43 4M' },
            {
              value: 'M-AMG C63',
              validFor: [6],
              label: 'M-AMG C63'
            },
            { value: 'M-AMG C63 S', validFor: [6], label: 'M-AMG C63 S' },
            {
              value: 'M-AMG C43 4M C',
              validFor: [7],
              label: 'M-AMG C43 4M C'
            },
            { value: 'M-AMG C63 C', validFor: [7], label: 'M-AMG C63 C' },
            {
              value: 'M-AMG C63 S C',
              validFor: [7],
              label: 'M-AMG C63 S C'
            },
            { value: 'M-AMG C43 4M T', validFor: [8], label: 'M-AMG C43 4M T' },
            {
              value: 'M-A CLA45 4M',
              validFor: [9],
              label: 'M-A CLA45 4M'
            },
            {
              value: 'M-AMG CLA35 4M',
              validFor: [10],
              label: 'M-AMG CLA35 4M'
            },
            {
              value: 'M-AMG CLA45 S 4M',
              validFor: [10],
              label: 'M-AMG CLA45 S 4M'
            },
            {
              value: 'M-A CLA45 4M SB',
              validFor: [11],
              label: 'M-A CLA45 4M SB'
            },
            {
              value: 'M-AMG CLS53 4M',
              validFor: [12],
              label: 'M-AMG CLS53 4M'
            },
            { value: 'M-AMG E43 4M', validFor: [13], label: 'M-AMG E43 4M' },
            {
              value: 'M-AMG E53 4M',
              validFor: [13],
              label: 'M-AMG E53 4M'
            },
            { value: 'M-AMG E63 4M', validFor: [13], label: 'M-AMG E63 4M' },
            {
              value: 'M-AMG E63 S 4M',
              validFor: [13],
              label: 'M-AMG E63 S 4M'
            },
            {
              value: 'M-AMG E53 4M C',
              validFor: [14],
              label: 'M-AMG E53 4M C'
            },
            {
              value: 'M-AMG G63 L',
              validFor: [16],
              label: 'M-AMG G63 L'
            },
            {
              value: 'M-AMG GLA45 4M FL',
              validFor: [17],
              label: 'M-AMG GLA45 4M FL'
            },
            {
              value: 'M-AMG GLC43 4M',
              validFor: [18],
              label: 'M-AMG GLC43 4M'
            },
            {
              value: 'M-AMG GLC63 4M',
              validFor: [18],
              label: 'M-AMG GLC63 4M'
            },
            {
              value: 'M-AMG GLC43 4M C',
              validFor: [19],
              label: 'M-AMG GLC43 4M C'
            },
            {
              value: 'M-AMG GLC63 S 4M C',
              validFor: [19],
              label: 'M-AMG GLC63 S 4M C'
            },
            {
              value: 'M-AMG GLE43 4M C',
              validFor: [22],
              label: 'M-AMG GLE43 4M C'
            },
            {
              value: 'M-AMG GLE63 4M C',
              validFor: [22],
              label: 'M-AMG GLE63 4M C'
            },
            {
              value: 'M-AMG GLS63 4M',
              validFor: [23],
              label: 'M-AMG GLS63 4M'
            },
            { value: 'M-AMG GT', validFor: [31], label: 'M-AMG GT' },
            {
              value: 'M-AMG GT C',
              validFor: [31],
              label: 'M-AMG GT C'
            },
            { value: 'M-AMG GT S', validFor: [31], label: 'M-AMG GT S' },
            {
              value: 'M-AMG GT R',
              validFor: [31],
              label: 'M-AMG GT R'
            },
            {
              value: 'M-AMG GT 43 4M',
              validFor: [32],
              label: 'M-AMG GT 43 4M'
            },
            {
              value: 'M-AMG GT 53 4M',
              validFor: [32],
              label: 'M-AMG GT 53 4M'
            },
            {
              value: 'M-AMG GT 63 4M',
              validFor: [32],
              label: 'M-AMG GT 63 4M'
            },
            {
              value: 'M-AMG GT 63 S 4M',
              validFor: [32],
              label: 'M-AMG GT 63 S 4M'
            },
            {
              value: 'M-AMG GT ROADSTER',
              validFor: [33],
              label: 'M-AMG GT ROADSTER'
            },
            {
              value: 'M-AMG S63 4M C',
              validFor: [26],
              label: 'M-AMG S63 4M C'
            },
            {
              value: 'M-AMG SLC43',
              validFor: [28],
              label: 'M-AMG SLC43'
            },
            {
              value: 'M-MAYBACH S560',
              validFor: [34],
              label: 'M-MAYBACH S560'
            },
            {
              value: 'M-MAYBACH S650',
              validFor: [34],
              label: 'M-MAYBACH S650'
            },
            {
              value: 'C453 52KW PURE',
              validFor: [35],
              label: 'C453 52KW PURE'
            },
            {
              value: 'C453 52KW PASSION',
              validFor: [35],
              label: 'C453 52KW PASSION'
            },
            {
              value: 'C453 BRABUS 80KW',
              validFor: [35],
              label: 'C453 BRABUS 80KW'
            },
            {
              value: 'W453 52KW PURE',
              validFor: [36],
              label: 'W453 52KW PURE'
            },
            {
              value: 'W453 66KW PURE',
              validFor: [36],
              label: 'W453 66KW PURE'
            },
            {
              value: 'W453 66KW PASSION',
              validFor: [36],
              label: 'W453 66KW PASSION'
            },
            {
              value: 'Mercedes-Benz Select',
              validFor: [37],
              label: 'Mercedes-Benz Select'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Lead__c/picklist-values/0120k0000004oReAAI/TWRetailInterestedModel2__c',
          eTag: 'e1cb6095ed1f67947dbdb5607e9f42c4',
          controllerValues: {
            'Mercedes-Benz Select': 37,
            'forfour (W453)': 36,
            'fortwo (C453)': 35,
            'Maybach (X222)': 34,
            'GT Roadster (R190)': 33,
            'GT (X290)': 32,
            'GT (C190)': 31,
            'Vito (Vito VS20)': 30,
            'V-Class (V-Class VS20)': 29,
            'SLC (R172)': 28,
            'SL (R231)': 27,
            'S Coupe (C217)': 26,
            'S-Class (W/V222)': 25,
            'GLS (X167)': 24,
            'GLS (X166)': 23,
            'GLE Coupe (C292)': 22,
            'GLE (V167)': 21,
            'GLE (W166)': 20,
            'GLC Coupe (C253)': 19,
            'GLC (X253)': 18,
            'GLA (X156)': 17,
            'G-Class (W463)': 16,
            'E Estate (S213)': 15,
            'E Coupe (C238)': 14,
            'E-Class (W213)': 13,
            'CLS (C257)': 12,
            'CLA SB (X117)': 11,
            'CLA (C118)': 10,
            'CLA (C117)': 9,
            'C Estate (S205)': 8,
            'C Coupe (C205)': 7,
            'C-Class (W205)': 6,
            'C Cabrio (A205)': 5,
            'B-Class (W247)': 4,
            'B-Class (W246)': 3,
            'A-Class (V177)': 2,
            'A-Class (W177)': 1,
            'A-Class (W176)': 0
          }
        },
        Class2: {
          values: [
            {
              value: 'A-Class (W176)',
              validFor: [0, 1],
              label: 'A-Class (W176)'
            },
            {
              value: 'A-Class (W177)',
              validFor: [0, 1],
              label: 'A-Class (W177)'
            },
            {
              value: 'A-Class (V177)',
              validFor: [0],
              label: 'A-Class (V177)'
            },
            { value: 'B-Class (W246)', validFor: [0], label: 'B-Class (W246)' },
            {
              value: 'B-Class (W247)',
              validFor: [0],
              label: 'B-Class (W247)'
            },
            {
              value: 'C Cabrio (A205)',
              validFor: [0, 1],
              label: 'C Cabrio (A205)'
            },
            {
              value: 'C-Class (W205)',
              validFor: [0, 1],
              label: 'C-Class (W205)'
            },
            {
              value: 'C Coupe (C205)',
              validFor: [0, 1],
              label: 'C Coupe (C205)'
            },
            {
              value: 'C Estate (S205)',
              validFor: [0, 1],
              label: 'C Estate (S205)'
            },
            { value: 'CLA (C117)', validFor: [0, 1], label: 'CLA (C117)' },
            {
              value: 'CLA (C118)',
              validFor: [0, 1],
              label: 'CLA (C118)'
            },
            {
              value: 'CLA SB (X117)',
              validFor: [0, 1],
              label: 'CLA SB (X117)'
            },
            {
              value: 'CLS (C257)',
              validFor: [0, 1],
              label: 'CLS (C257)'
            },
            {
              value: 'E-Class (W213)',
              validFor: [0, 1],
              label: 'E-Class (W213)'
            },
            {
              value: 'E Coupe (C238)',
              validFor: [0, 1],
              label: 'E Coupe (C238)'
            },
            {
              value: 'E Estate (S213)',
              validFor: [0],
              label: 'E Estate (S213)'
            },
            {
              value: 'G-Class (W463)',
              validFor: [0, 1],
              label: 'G-Class (W463)'
            },
            { value: 'GLA (X156)', validFor: [0, 1], label: 'GLA (X156)' },
            {
              value: 'GLC (X253)',
              validFor: [0, 1],
              label: 'GLC (X253)'
            },
            {
              value: 'GLC Coupe (C253)',
              validFor: [0, 1],
              label: 'GLC Coupe (C253)'
            },
            {
              value: 'GLE (W166)',
              validFor: [0],
              label: 'GLE (W166)'
            },
            { value: 'GLE (V167)', validFor: [0], label: 'GLE (V167)' },
            {
              value: 'GLE Coupe (C292)',
              validFor: [0, 1],
              label: 'GLE Coupe (C292)'
            },
            { value: 'GLS (X166)', validFor: [0, 1], label: 'GLS (X166)' },
            {
              value: 'GLS (X167)',
              validFor: [0],
              label: 'GLS (X167)'
            },
            {
              value: 'S-Class (W/V222)',
              validFor: [0],
              label: 'S-Class (W/V222)'
            },
            {
              value: 'S Coupe (C217)',
              validFor: [0, 1],
              label: 'S Coupe (C217)'
            },
            { value: 'SL (R231)', validFor: [0], label: 'SL (R231)' },
            {
              value: 'SLC (R172)',
              validFor: [0, 1],
              label: 'SLC (R172)'
            },
            {
              value: 'V-Class (V-Class VS20)',
              validFor: [0],
              label: 'V-Class (V-Class VS20)'
            },
            {
              value: 'Vito (Vito VS20)',
              validFor: [0],
              label: 'Vito (Vito VS20)'
            },
            {
              value: 'GT (C190)',
              validFor: [1],
              label: 'GT (C190)'
            },
            { value: 'GT (X290)', validFor: [1], label: 'GT (X290)' },
            {
              value: 'GT Roadster (R190)',
              validFor: [1],
              label: 'GT Roadster (R190)'
            },
            { value: 'Maybach (X222)', validFor: [2], label: 'Maybach (X222)' },
            {
              value: 'fortwo (C453)',
              validFor: [3],
              label: 'fortwo (C453)'
            },
            {
              value: 'forfour (W453)',
              validFor: [3],
              label: 'forfour (W453)'
            },
            {
              value: 'Mercedes-Benz Select',
              validFor: [4],
              label: 'Mercedes-Benz Select'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Lead__c/picklist-values/0120k0000004oReAAI/TWRetailInterestedClass2__c',
          eTag: '9975ed22603d3ff40a900a08eea08526',
          controllerValues: {
            'Mercedes-Benz Select': 4,
            smart: 3,
            'Mercedes-Maybach': 2,
            'Mercedes-AMG': 1,
            'Mercedes-Benz': 0
          }
        },
        Brand2: {
          values: [
            {
              value: 'Mercedes-Benz',
              validFor: [],
              label: 'Mercedes-Benz'
            },
            { value: 'Mercedes-AMG', validFor: [], label: 'Mercedes-AMG' },
            {
              value: 'Mercedes-Maybach',
              validFor: [],
              label: 'Mercedes-Maybach'
            },
            { value: 'smart', validFor: [], label: 'smart' },
            {
              value: 'Mercedes-Benz Select',
              validFor: [],
              label: 'Mercedes-Benz Select'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Lead__c/picklist-values/0120k0000004oReAAI/TWRetailInterestedBrand2__c',
          eTag: '2e42edec70a9ed8b6223922dbe8b3861',
          controllerValues: {}
        },
        RetailInterestedVehicleModel: {
          values: [
            { value: 'A180', validFor: [2, 4], label: 'A180' },
            {
              value: 'A180 AMG LINE',
              validFor: [2],
              label: 'A180 AMG LINE'
            },
            { value: 'A250 SPORT', validFor: [2], label: 'A250 SPORT' },
            {
              value: 'A200',
              validFor: [4],
              label: 'A200'
            },
            { value: 'A220', validFor: [4], label: 'A220' },
            {
              value: 'A250',
              validFor: [4],
              label: 'A250'
            },
            { value: 'A180 SED', validFor: [0], label: 'A180 SED' },
            {
              value: 'A200 SED',
              validFor: [0],
              label: 'A200 SED'
            },
            { value: 'B180', validFor: [5, 6], label: 'B180' },
            {
              value: 'B180 AMG LINE',
              validFor: [5],
              label: 'B180 AMG LINE'
            },
            { value: 'B200', validFor: [5, 6], label: 'B200' },
            {
              value: 'B200 d',
              validFor: [5],
              label: 'B200 d'
            },
            { value: 'C200 Cabrio', validFor: [8], label: 'C200 Cabrio' },
            {
              value: 'C180',
              validFor: [14],
              label: 'C180'
            },
            { value: 'C200', validFor: [14], label: 'C200' },
            {
              value: 'C200 d',
              validFor: [14],
              label: 'C200 d'
            },
            { value: 'C200 AVA', validFor: [14], label: 'C200 AVA' },
            {
              value: 'C200 EXCLUSIVE',
              validFor: [14],
              label: 'C200 EXCLUSIVE'
            },
            { value: 'C250 AMG', validFor: [14], label: 'C250 AMG' },
            {
              value: 'C300',
              validFor: [14],
              label: 'C300'
            },
            { value: 'C180 C', validFor: [10], label: 'C180 C' },
            {
              value: 'C250 C',
              validFor: [10],
              label: 'C250 C'
            },
            { value: 'C300 C', validFor: [10], label: 'C300 C' },
            {
              value: 'C180 T',
              validFor: [12],
              label: 'C180 T'
            },
            { value: 'C200 T', validFor: [12], label: 'C200 T' },
            {
              value: 'C250 T',
              validFor: [12],
              label: 'C250 T'
            },
            { value: 'C300 T', validFor: [12], label: 'C300 T' },
            {
              value: 'CLA200',
              validFor: [16, 18],
              label: 'CLA200'
            },
            { value: 'CLA250', validFor: [16, 18], label: 'CLA250' },
            {
              value: 'CLA200 SB',
              validFor: [20],
              label: 'CLA200 SB'
            },
            { value: 'CLA250 SB', validFor: [20], label: 'CLA250 SB' },
            {
              value: 'CLS350',
              validFor: [22],
              label: 'CLS350'
            },
            { value: 'E200 AVA', validFor: [26], label: 'E200 AVA' },
            {
              value: 'E200 AVA LUX',
              validFor: [26],
              label: 'E200 AVA LUX'
            },
            { value: 'E220 d AVA', validFor: [26], label: 'E220 d AVA' },
            {
              value: 'E250 AVA',
              validFor: [26],
              label: 'E250 AVA'
            },
            { value: 'E250 EXCL', validFor: [26], label: 'E250 EXCL' },
            {
              value: 'E250 AMG LINE',
              validFor: [26],
              label: 'E250 AMG LINE'
            },
            { value: 'E300 AVA', validFor: [26], label: 'E300 AVA' },
            {
              value: 'E300 EXCLUSIVE',
              validFor: [26],
              label: 'E300 EXCLUSIVE'
            },
            { value: 'E300 AMG LINE', validFor: [26], label: 'E300 AMG LINE' },
            {
              value: 'E200 C',
              validFor: [24],
              label: 'E200 C'
            },
            { value: 'E300 C', validFor: [24], label: 'E300 C' },
            {
              value: 'E400 4M C',
              validFor: [24],
              label: 'E400 4M C'
            },
            { value: 'E200 AVA T', validFor: [27], label: 'E200 AVA T' },
            {
              value: 'E220 d AVA T',
              validFor: [27],
              label: 'E220 d AVA T'
            },
            { value: 'E300 AVA T', validFor: [27], label: 'E300 AVA T' },
            {
              value: 'G350 d',
              validFor: [37],
              label: 'G350 d'
            },
            { value: 'G500 L', validFor: [37], label: 'G500 L' },
            {
              value: 'GLA180',
              validFor: [39],
              label: 'GLA180'
            },
            {
              value: 'GLA180 AMGLINE',
              validFor: [39],
              label: 'GLA180 AMGLINE'
            },
            {
              value: 'GLA200',
              validFor: [39],
              label: 'GLA200'
            },
            { value: 'GLA200 d', validFor: [39], label: 'GLA200 d' },
            {
              value: 'GLC200',
              validFor: [41],
              label: 'GLC200'
            },
            { value: 'GLC220 d 4M', validFor: [41], label: 'GLC220 d 4M' },
            {
              value: 'GLC250 4M',
              validFor: [41],
              label: 'GLC250 4M'
            },
            {
              value: 'GLC250 4M AMGLINE',
              validFor: [41],
              label: 'GLC250 4M AMGLINE'
            },
            {
              value: 'GLC200 C',
              validFor: [43],
              label: 'GLC200 C'
            },
            { value: 'GLC250 4M C', validFor: [43], label: 'GLC250 4M C' },
            {
              value: 'GLC250 4M AMG C',
              validFor: [43],
              label: 'GLC250 4M AMG C'
            },
            { value: 'GLE250 d 4M', validFor: [31], label: 'GLE250 d 4M' },
            {
              value: 'GLE350 d 4M',
              validFor: [30, 31],
              label: 'GLE350 d 4M'
            },
            { value: 'GLE400 4M', validFor: [30, 31], label: 'GLE400 4M' },
            {
              value: 'GLE300 d 4M',
              validFor: [30],
              label: 'GLE300 d 4M'
            },
            { value: 'GLE400 d 4M', validFor: [30], label: 'GLE400 d 4M' },
            {
              value: 'GLE 450 4M',
              validFor: [30],
              label: 'GLE 450 4M'
            },
            { value: 'GLE350 d 4M C', validFor: [45], label: 'GLE350 d 4M C' },
            {
              value: 'GLS350 d 4M',
              validFor: [32, 47],
              label: 'GLS350 d 4M'
            },
            { value: 'S350 d', validFor: [54], label: 'S350 d' },
            {
              value: 'S350 d L',
              validFor: [54],
              label: 'S350 d L'
            },
            { value: 'S450 L', validFor: [54], label: 'S450 L' },
            {
              value: 'S560 L',
              validFor: [54],
              label: 'S560 L'
            },
            { value: 'S560e L', validFor: [54], label: 'S560e L' },
            {
              value: 'S500 C',
              validFor: [51],
              label: 'S500 C'
            },
            { value: 'S560 C', validFor: [51], label: 'S560 C' },
            {
              value: 'SL400',
              validFor: [55],
              label: 'SL400'
            },
            { value: 'SLC200', validFor: [53], label: 'SLC200' },
            {
              value: 'V220 d',
              validFor: [56],
              label: 'V220 d'
            },
            { value: 'V250 d', validFor: [56], label: 'V250 d' },
            {
              value: 'V250 d AVA',
              validFor: [56],
              label: 'V250 d AVA'
            },
            {
              value: 'V250d AMG LINE',
              validFor: [56],
              label: 'V250d AMG LINE'
            },
            {
              value: 'VITO TOURER',
              validFor: [57],
              label: 'VITO TOURER'
            },
            {
              value: 'VITO TOURER 120KW',
              validFor: [57],
              label: 'VITO TOURER 120KW'
            },
            {
              value: 'M-AMG A45 4M',
              validFor: [1],
              label: 'M-AMG A45 4M'
            },
            { value: 'M-AMG A35 4M', validFor: [3], label: 'M-AMG A35 4M' },
            {
              value: 'M-AMG A45 S 4M',
              validFor: [3],
              label: 'M-AMG A45 S 4M'
            },
            {
              value: 'M-AMG C43 4M Cabrio',
              validFor: [7],
              label: 'M-AMG C43 4M Cabrio'
            },
            { value: 'M-AMG C43 4M', validFor: [13], label: 'M-AMG C43 4M' },
            {
              value: 'M-AMG C63',
              validFor: [13],
              label: 'M-AMG C63'
            },
            { value: 'M-AMG C63 S', validFor: [13], label: 'M-AMG C63 S' },
            {
              value: 'M-AMG C43 4M C',
              validFor: [9],
              label: 'M-AMG C43 4M C'
            },
            { value: 'M-AMG C63 C', validFor: [9], label: 'M-AMG C63 C' },
            {
              value: 'M-AMG C63 S C',
              validFor: [9],
              label: 'M-AMG C63 S C'
            },
            {
              value: 'M-AMG C43 4M T',
              validFor: [11],
              label: 'M-AMG C43 4M T'
            },
            {
              value: 'M-A CLA45 4M',
              validFor: [15],
              label: 'M-A CLA45 4M'
            },
            {
              value: 'M-AMG CLA35 4M',
              validFor: [17],
              label: 'M-AMG CLA35 4M'
            },
            {
              value: 'M-AMG CLA45 S 4M',
              validFor: [17],
              label: 'M-AMG CLA45 S 4M'
            },
            {
              value: 'M-A CLA45 4M SB',
              validFor: [19],
              label: 'M-A CLA45 4M SB'
            },
            {
              value: 'M-AMG CLS53 4M',
              validFor: [21],
              label: 'M-AMG CLS53 4M'
            },
            { value: 'M-AMG E43 4M', validFor: [25], label: 'M-AMG E43 4M' },
            {
              value: 'M-AMG E53 4M',
              validFor: [25],
              label: 'M-AMG E53 4M'
            },
            { value: 'M-AMG E63 4M', validFor: [25], label: 'M-AMG E63 4M' },
            {
              value: 'M-AMG E63 S 4M',
              validFor: [25],
              label: 'M-AMG E63 S 4M'
            },
            {
              value: 'M-AMG E53 4M C',
              validFor: [23],
              label: 'M-AMG E53 4M C'
            },
            {
              value: 'M-AMG G63 L',
              validFor: [36],
              label: 'M-AMG G63 L'
            },
            {
              value: 'M-AMG GLA45 4M FL',
              validFor: [38],
              label: 'M-AMG GLA45 4M FL'
            },
            {
              value: 'M-AMG GLC43 4M',
              validFor: [40],
              label: 'M-AMG GLC43 4M'
            },
            {
              value: 'M-AMG GLC63 4M',
              validFor: [40],
              label: 'M-AMG GLC63 4M'
            },
            {
              value: 'M-AMG GLC43 4M C',
              validFor: [42],
              label: 'M-AMG GLC43 4M C'
            },
            {
              value: 'M-AMG GLC63 S 4M C',
              validFor: [42],
              label: 'M-AMG GLC63 S 4M C'
            },
            {
              value: 'M-AMG GLE43 4M C',
              validFor: [44],
              label: 'M-AMG GLE43 4M C'
            },
            {
              value: 'M-AMG GLE63 4M C',
              validFor: [44],
              label: 'M-AMG GLE63 4M C'
            },
            {
              value: 'M-AMG GLS63 4M',
              validFor: [46],
              label: 'M-AMG GLS63 4M'
            },
            { value: 'M-AMG GT', validFor: [33], label: 'M-AMG GT' },
            {
              value: 'M-AMG GT C',
              validFor: [33],
              label: 'M-AMG GT C'
            },
            { value: 'M-AMG GT S', validFor: [33], label: 'M-AMG GT S' },
            {
              value: 'M-AMG GT R',
              validFor: [33],
              label: 'M-AMG GT R'
            },
            {
              value: 'M-AMG GT 43 4M',
              validFor: [34],
              label: 'M-AMG GT 43 4M'
            },
            {
              value: 'M-AMG GT 53 4M',
              validFor: [34],
              label: 'M-AMG GT 53 4M'
            },
            {
              value: 'M-AMG GT 63 4M',
              validFor: [34],
              label: 'M-AMG GT 63 4M'
            },
            {
              value: 'M-AMG GT 63 S 4M',
              validFor: [34],
              label: 'M-AMG GT 63 S 4M'
            },
            {
              value: 'M-AMG GT ROADSTER',
              validFor: [35],
              label: 'M-AMG GT ROADSTER'
            },
            {
              value: 'M-AMG S63 4M C',
              validFor: [50],
              label: 'M-AMG S63 4M C'
            },
            {
              value: 'M-AMG SLC43',
              validFor: [52],
              label: 'M-AMG SLC43'
            },
            {
              value: 'M-MAYBACH S560',
              validFor: [48],
              label: 'M-MAYBACH S560'
            },
            {
              value: 'M-MAYBACH S650',
              validFor: [48],
              label: 'M-MAYBACH S650'
            },
            {
              value: 'C453 52KW PURE',
              validFor: [29],
              label: 'C453 52KW PURE'
            },
            {
              value: 'C453 52KW PASSION',
              validFor: [29],
              label: 'C453 52KW PASSION'
            },
            {
              value: 'C453 BRABUS 80KW',
              validFor: [29],
              label: 'C453 BRABUS 80KW'
            },
            {
              value: 'W453 52KW PURE',
              validFor: [28],
              label: 'W453 52KW PURE'
            },
            {
              value: 'W453 66KW PURE',
              validFor: [28],
              label: 'W453 66KW PURE'
            },
            {
              value: 'W453 66KW PASSION',
              validFor: [28],
              label: 'W453 66KW PASSION'
            },
            {
              value: 'Mercedes-Benz Select',
              validFor: [49],
              label: 'Mercedes-Benz Select'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Lead__c/picklist-values/0120k0000004oReAAI/TWRetailInterestedModel1SC__c',
          eTag: 'e1cb6095ed1f67947dbdb5607e9f42c4',
          controllerValues: {
            'Vito (Vito VS20)': 57,
            'V-Class (V-Class VS20)': 56,
            'SL (R231)': 55,
            'S-Class (W/V222)': 54,
            'Benz_SLC (R172)': 53,
            'AMG_SLC (R172)': 52,
            'Benz_S Coupe (C217)': 51,
            'AMG_S Coupe (C217)': 50,
            'Mercedes-Benz Select': 49,
            'Maybach (X222)': 48,
            'Benz_GLS (X166)': 47,
            'AMG_GLS (X166)': 46,
            'Benz_GLE Coupe (C292)': 45,
            'AMG_GLE Coupe (C292)': 44,
            'Benz_GLC Coupe (C253)': 43,
            'AMG_GLC Coupe (C253)': 42,
            'Benz_GLC (X253)': 41,
            'AMG_GLC (X253)': 40,
            'Benz_GLA (X156)': 39,
            'AMG_GLA (X156)': 38,
            'Benz_G-Class (W463)': 37,
            'AMG_G-Class (W463)': 36,
            'GT Roadster (R190)': 35,
            'GT (X290)': 34,
            'GT (C190)': 33,
            'GLS (X167)': 32,
            'GLE (W166)': 31,
            'GLE (V167)': 30,
            'fortwo (C453)': 29,
            'forfour (W453)': 28,
            'E Estate (S213)': 27,
            'Benz_E-Class (W213)': 26,
            'AMG_E-Class (W213)': 25,
            'Benz_E Coupe (C238)': 24,
            'AMG_E Coupe (C238)': 23,
            'Benz_CLS (C257)': 22,
            'AMG_CLS (C257)': 21,
            'Benz_CLA SB (X117)': 20,
            'AMG_CLA SB (X117)': 19,
            'Benz_CLA (C118)': 18,
            'AMG_CLA (C118)': 17,
            'Benz_CLA (C117)': 16,
            'AMG_CLA (C117)': 15,
            'Benz_C-Class (W205)': 14,
            'AMG_C-Class (W205)': 13,
            'Benz_C Estate (S205)': 12,
            'AMG_C Estate (S205)': 11,
            'Benz_C Coupe (C205)': 10,
            'AMG_C Coupe (C205)': 9,
            'Benz_C Cabrio (A205)': 8,
            'AMG_C Cabrio (A205)': 7,
            'B-Class (W247)': 6,
            'B-Class (W246)': 5,
            'Benz_A-Class (W177)': 4,
            'AMG_A-Class (W177)': 3,
            'Benz_A-Class (W176)': 2,
            'AMG_A-Class (W176)': 1,
            'A-Class (V177)': 0
          }
        },
        RetailInterestedVehicleClass: {
          values: [
            {
              value: 'A-Class (V177)',
              validFor: [0],
              label: 'A-Class (V177)'
            },
            {
              value: 'AMG_A-Class (W176)',
              validFor: [1],
              label: 'A-Class (W176)'
            },
            {
              value: 'Benz_A-Class (W176)',
              validFor: [0],
              label: 'A-Class (W176)'
            },
            {
              value: 'AMG_A-Class (W177)',
              validFor: [1],
              label: 'A-Class (W177)'
            },
            {
              value: 'Benz_A-Class (W177)',
              validFor: [0],
              label: 'A-Class (W177)'
            },
            {
              value: 'B-Class (W246)',
              validFor: [0],
              label: 'B-Class (W246)'
            },
            { value: 'B-Class (W247)', validFor: [0], label: 'B-Class (W247)' },
            {
              value: 'AMG_C Cabrio (A205)',
              validFor: [1],
              label: 'C Cabrio (A205)'
            },
            {
              value: 'Benz_C Cabrio (A205)',
              validFor: [0],
              label: 'C Cabrio (A205)'
            },
            {
              value: 'AMG_C Coupe (C205)',
              validFor: [1],
              label: 'C Coupe (C205)'
            },
            {
              value: 'Benz_C Coupe (C205)',
              validFor: [0],
              label: 'C Coupe (C205)'
            },
            {
              value: 'AMG_C Estate (S205)',
              validFor: [1],
              label: 'C Estate (S205)'
            },
            {
              value: 'Benz_C Estate (S205)',
              validFor: [0],
              label: 'C Estate (S205)'
            },
            {
              value: 'AMG_C-Class (W205)',
              validFor: [1],
              label: 'C-Class (W205)'
            },
            {
              value: 'Benz_C-Class (W205)',
              validFor: [0],
              label: 'C-Class (W205)'
            },
            {
              value: 'AMG_CLA (C117)',
              validFor: [1],
              label: 'CLA (C117)'
            },
            { value: 'Benz_CLA (C117)', validFor: [0], label: 'CLA (C117)' },
            {
              value: 'AMG_CLA (C118)',
              validFor: [1],
              label: 'CLA (C118)'
            },
            { value: 'Benz_CLA (C118)', validFor: [0], label: 'CLA (C118)' },
            {
              value: 'AMG_CLA SB (X117)',
              validFor: [1],
              label: 'CLA SB (X117)'
            },
            {
              value: 'Benz_CLA SB (X117)',
              validFor: [0],
              label: 'CLA SB (X117)'
            },
            {
              value: 'AMG_CLS (C257)',
              validFor: [1],
              label: 'CLS (C257)'
            },
            { value: 'Benz_CLS (C257)', validFor: [0], label: 'CLS (C257)' },
            {
              value: 'AMG_E Coupe (C238)',
              validFor: [1],
              label: 'E Coupe (C238)'
            },
            {
              value: 'Benz_E Coupe (C238)',
              validFor: [0],
              label: 'E Coupe (C238)'
            },
            {
              value: 'AMG_E-Class (W213)',
              validFor: [1],
              label: 'E-Class (W213)'
            },
            {
              value: 'Benz_E-Class (W213)',
              validFor: [0],
              label: 'E-Class (W213)'
            },
            {
              value: 'E Estate (S213)',
              validFor: [0],
              label: 'E Estate (S213)'
            },
            {
              value: 'forfour (W453)',
              validFor: [3],
              label: 'forfour (W453)'
            },
            { value: 'fortwo (C453)', validFor: [3], label: 'fortwo (C453)' },
            {
              value: 'GLE (V167)',
              validFor: [0],
              label: 'GLE (V167)'
            },
            { value: 'GLE (W166)', validFor: [0], label: 'GLE (W166)' },
            {
              value: 'GLS (X167)',
              validFor: [0],
              label: 'GLS (X167)'
            },
            { value: 'GT (C190)', validFor: [1], label: 'GT (C190)' },
            {
              value: 'GT (X290)',
              validFor: [1],
              label: 'GT (X290)'
            },
            {
              value: 'GT Roadster (R190)',
              validFor: [1],
              label: 'GT Roadster (R190)'
            },
            {
              value: 'AMG_G-Class (W463)',
              validFor: [1],
              label: 'G-Class (W463)'
            },
            {
              value: 'Benz_G-Class (W463)',
              validFor: [0],
              label: 'G-Class (W463)'
            },
            {
              value: 'AMG_GLA (X156)',
              validFor: [1],
              label: 'GLA (X156)'
            },
            { value: 'Benz_GLA (X156)', validFor: [0], label: 'GLA (X156)' },
            {
              value: 'AMG_GLC (X253)',
              validFor: [1],
              label: 'GLC (X253)'
            },
            { value: 'Benz_GLC (X253)', validFor: [0], label: 'GLC (X253)' },
            {
              value: 'AMG_GLC Coupe (C253)',
              validFor: [1],
              label: 'GLC Coupe (C253)'
            },
            {
              value: 'Benz_GLC Coupe (C253)',
              validFor: [0],
              label: 'GLC Coupe (C253)'
            },
            {
              value: 'AMG_GLE Coupe (C292)',
              validFor: [1],
              label: 'GLE Coupe (C292)'
            },
            {
              value: 'Benz_GLE Coupe (C292)',
              validFor: [0],
              label: 'GLE Coupe (C292)'
            },
            { value: 'AMG_GLS (X166)', validFor: [1], label: 'GLS (X166)' },
            {
              value: 'Benz_GLS (X166)',
              validFor: [0],
              label: 'GLS (X166)'
            },
            {
              value: 'Maybach (X222)',
              validFor: [2],
              label: 'Maybach (X222)'
            },
            {
              value: 'Mercedes-Benz Select',
              validFor: [4],
              label: 'Mercedes-Benz Select'
            },
            {
              value: 'AMG_S Coupe (C217)',
              validFor: [1],
              label: 'S Coupe (C217)'
            },
            {
              value: 'Benz_S Coupe (C217)',
              validFor: [0],
              label: 'S Coupe (C217)'
            },
            {
              value: 'AMG_SLC (R172)',
              validFor: [1],
              label: 'SLC (R172)'
            },
            { value: 'Benz_SLC (R172)', validFor: [0], label: 'SLC (R172)' },
            {
              value: 'S-Class (W/V222)',
              validFor: [0],
              label: 'S-Class (W/V222)'
            },
            { value: 'SL (R231)', validFor: [0], label: 'SL (R231)' },
            {
              value: 'V-Class (V-Class VS20)',
              validFor: [0],
              label: 'V-Class (V-Class VS20)'
            },
            {
              value: 'Vito (Vito VS20)',
              validFor: [0],
              label: 'Vito (Vito VS20)'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Lead__c/picklist-values/0120k0000004oReAAI/TWRetailInterestedClass1SC__c',
          eTag: 'a35a7a206e238bcdcee148e368d42076',
          controllerValues: {
            'Mercedes-Benz Select': 4,
            smart: 3,
            'Mercedes-Maybach': 2,
            'Mercedes-AMG': 1,
            'Mercedes-Benz': 0
          }
        },
        RetailInterestedVehicleBrand: {
          values: [
            {
              value: 'Mercedes-Benz',
              validFor: [],
              label: 'Mercedes-Benz'
            },
            { value: 'Mercedes-AMG', validFor: [], label: 'Mercedes-AMG' },
            {
              value: 'Mercedes-Maybach',
              validFor: [],
              label: 'Mercedes-Maybach'
            },
            { value: 'smart', validFor: [], label: 'smart' },
            {
              value: 'Mercedes-Benz Select',
              validFor: [],
              label: 'Mercedes-Benz Select'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Lead__c/picklist-values/0120k0000004oReAAI/TWRetailInterestedBrand1SC__c',
          eTag: '2e42edec70a9ed8b6223922dbe8b3861',
          controllerValues: {}
        },
        ClosureReasonsDrilldownBySC: {
          values: [
            {
              value:
                'Competitor offers competitive price or more attractive sales measure',
              validFor: [0],
              label: '競爭品牌價格較有優勢、銷售方案較有吸引力'
            },
            {
              value:
                'Customer thinks competitor offers better after-sales services',
              validFor: [0, 1],
              label: '客戶認為競爭品牌之售後服務較佳'
            },
            {
              value:
                'Customer receives various quotation within MB dealers, which makes him difficult to decide',
              validFor: [0],
              label: '客戶認為本品牌之報價混亂，無法決定'
            },
            {
              value: 'No matching model/spec/feature/color from our offering',
              validFor: [0],
              label: '本品牌沒有符合需求的車型/規格/配備/顏色'
            },
            {
              value: 'Fail to apply for loan or leasing program',
              validFor: [0, 1, 3],
              label: '貸款或租賃申請失敗'
            },
            {
              value: 'Purchase competitors used car',
              validFor: [0],
              label: '購買他牌中古車'
            },
            {
              value: 'Purchase competitors grey-import car',
              validFor: [0],
              label: '購買他牌水貨車'
            },
            {
              value:
                'Competitor offers competitive more discount ( or giveaway )',
              validFor: [1],
              label: '競爭者提供較大的折扣(及贈品)'
            },
            {
              value: 'Customer only visit for quotation of price comparison',
              validFor: [1],
              label: '客戶為競爭的客戶，只是前來詢價/比價'
            },
            {
              value: 'No existing stock ( spec/feature/color )',
              validFor: [1, 3],
              label: '購買車型沒有庫存(規格/配備/顏色)'
            },
            {
              value: 'Purchase MB Select used-car',
              validFor: [1],
              label: '購買MB Select 中古車'
            },
            {
              value: 'Purchase MB used car',
              validFor: [1],
              label: '購買MB 中古車'
            },
            {
              value: 'Purchase MB grey-import car',
              validFor: [1],
              label: '購買MB 水貨車'
            },
            {
              value: 'Customer can&#39;t accept quotation',
              validFor: [3],
              label: '客戶無法接受提供之報價'
            },
            {
              value: 'Purchase plan delayed or cancelled',
              validFor: [3],
              label: '購車計劃延遲或取消'
            },
            {
              value: 'No matching model from our offering',
              validFor: [3],
              label: '沒有符合需求的車型'
            },
            {
              value: 'Overlapped leads',
              validFor: [3],
              label: '重覆的銷售商機'
            },
            {
              value: 'Customer has no strong intention',
              validFor: [3],
              label: '客戶無強烈購車意願'
            },
            {
              value: 'Invalid customer info',
              validFor: [3],
              label: '客戶資料無效'
            },
            {
              value: 'Fail to reach customer / no response from customer',
              validFor: [3],
              label: '無法聯繫到客戶/客戶沒有回應'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Lead__c/picklist-values/0120k0000004oReAAI/Closure_Reasons_Drilldown_by_SC__c',
          eTag: '49134b7f7100aaf4f1af2e26d82d762e',
          controllerValues: {
            Others: 3,
            'Canceled orders': 2,
            'Lost sales within MB brand': 1,
            'Lost sales to other brands': 0
          }
        },
        ClosureReasonsBySC: {
          values: [
            {
              value: 'Lost sales to other brands',
              validFor: [],
              label: '敗戰其他競爭品牌'
            },
            {
              value: 'Lost sales within MB brand',
              validFor: [],
              label: '敗戰本牌內部競爭'
            },
            { value: 'Canceled orders', validFor: [], label: '退車' },
            {
              value: 'Others',
              validFor: [],
              label: '其它'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Lead__c/picklist-values/0120k0000004oReAAI/Retail_Closure_Reasons_by_SC__c',
          eTag: '80d72a68bb66dfb7fbb55b81c84d8a0c',
          controllerValues: {}
        },
        PaymentMethod: {
          values: [
            { value: 'Cash', validFor: [], label: '現金' },
            {
              value: 'Loan',
              validFor: [],
              label: '貸款'
            },
            { value: 'Lease', validFor: [], label: '租賃' }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Lead__c/picklist-values/0120k0000004oReAAI/Payment_Method__c',
          eTag: '4ee33188b3b1040f2d4fec086707f3d0',
          controllerValues: {}
        },
        ContactContent: {
          values: [
            {
              value: 'Prospecting',
              validFor: [],
              label: '需求探詢'
            },
            { value: 'TestDrive', validFor: [], label: '試駕' },
            {
              value: 'Trade-in Offer',
              validFor: [],
              label: '換購'
            },
            { value: 'Negotiation', validFor: [], label: '報價' },
            {
              value: 'Contract',
              validFor: [],
              label: '簽約'
            },
            {
              value: 'Financial and leasing related activities',
              validFor: [],
              label: '貸款或租賃對保'
            },
            { value: 'Accept', validFor: [], label: '報售' },
            {
              value: 'Registration',
              validFor: [],
              label: '掛牌'
            },
            { value: 'Registered', validFor: [], label: '報交' },
            {
              value: 'HandOver',
              validFor: [],
              label: '交車'
            },
            { value: 'CRM', validFor: [], label: '客戶關懷' }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Lead__c/picklist-values/0120k0000004oReAAI/Retail_ContactContent__c',
          eTag: '54d871b7af47d291a9f22afc6146d0e4',
          controllerValues: {}
        },
        CurrentChannel: {
          values: [
            {
              value: 'Retail Inbound',
              validFor: [],
              label: '客戶來電(經銷商)'
            },
            {
              value: 'Wholesale Inbound',
              validFor: [],
              label: '客戶來電(台灣賓士)'
            },
            {
              value: 'Retail Web in',
              validFor: [],
              label: '官網留言(經銷商)'
            },
            {
              value: 'Wholesale Web in',
              validFor: [],
              label: '官網留言(台灣賓士)'
            },
            {
              value: 'Acquisition',
              validFor: [],
              label: '主動開發'
            },
            { value: 'Marketing', validFor: [], label: '行銷活動' },
            {
              value: 'Walk-in',
              validFor: [],
              label: '主動來店'
            },
            { value: 'Referral', validFor: [], label: '親友推薦' },
            {
              value: 'AS Referral',
              validFor: [],
              label: '售後推薦'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Lead__c/picklist-values/0120k0000004oReAAI/RetailCurrentChannel__c',
          eTag: 'fbfdf5efbaf3908c677eefaa153df8ea',
          controllerValues: {}
        },
        LeadStatusDetail: {
          values: [
            { value: 'Q', validFor: [], label: '報價' },
            {
              value: 'O',
              validFor: [],
              label: '合約建立'
            },
            { value: 'C', validFor: [], label: '合約簽訂' },
            {
              value: 'A',
              validFor: [],
              label: '報售'
            },
            { value: 'R', validFor: [], label: '報交' },
            {
              value: 'D',
              validFor: [],
              label: '交車'
            },
            { value: 'I', validFor: [], label: '收據開立' }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Lead__c/picklist-values/0120k0000004oReAAI/Lead_Status_Detail__c',
          eTag: '784345757f9a759943c7322f1dba28a7',
          controllerValues: {}
        },
        LeadStatus: {
          values: [
            { value: 'In Progress', validFor: [], label: '促進中' },
            {
              value: 'Lost Sales',
              validFor: [],
              label: '敗戰(SC)'
            },
            { value: 'Successful', validFor: [], label: '成功' },
            {
              value: 'Unsuccessful',
              validFor: [],
              label: '敗戰(CCC)'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Lead__c/picklist-values/0120k0000004oReAAI/Retail_Dealer_Lead_Status__c',
          eTag: '1a2533f180d4e5553217a4ea32283290',
          defaultValue: { value: 'In Progress', validFor: [], label: '促進中' },
          controllerValues: {}
        },
        Grading: {
          values: [
            { value: 'H - Within 1 Week', label: 'H 級(1週內)' },
            {
              value: 'A - Within 1 month',
              validFor: [],
              label: 'A 級(1個月內)'
            },
            {
              value: 'B - Within 2 month',
              validFor: [],
              label: 'B 級(2個月內)'
            },
            {
              value: 'C - Within 3 month',
              validFor: [],
              label: 'C 級(3個月內)'
            },
            { value: 'D - Over 3 month', validFor: [], label: 'D 級(待培養)' }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Lead__c/picklist-values/0120k0000004oReAAI/Retail_Grading__c',
          eTag: 'cfe8dcbc0c5cf8e7efe9b356f3235f1e',
          controllerValues: {}
        },
        VehicleStockStatus: {
          values: [
            {
              value: 'Stock in TW/on ship',
              validFor: [],
              label: '已售待交-現車'
            },
            {
              value: 'Pipeline',
              validFor: [],
              label: '已售待交-期貨車'
            },
            {
              value: 'Not yet allocated',
              validFor: [],
              label: '待配額'
            },
            {
              value: '',
              validFor: [],
              label: '待確認車輛庫存狀態'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Lead__c/picklist-values/0120k0000004oReAAI/VehicleStockStatus__c',
          eTag: 'e25bbe0d54ac5f85df06002c8e2c9742',
          controllerValues: {}
        }
      },
      fakeEvent
    );
  },
  retrieveRetailTaskMetadata: handler => {
    handler(
      {
        ActivityStatus: {
          values: [
            { value: 'Open', validFor: [], label: '開案' },
            {
              value: 'Completed',
              validFor: [],
              label: '完成'
            },
            { value: 'Cancelled', validFor: [], label: '取消' }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Retail_Task__c/picklist-values/0120k000000Ac2UAAS/TaskStatus__c',
          eTag: '75521b7c9b8e78d2da31d6eafcdd3328',
          controllerValues: {}
        },
        TestDriveClass: {
          values: [
            {
              value: 'A-Class (W176)',
              validFor: [0, 1],
              label: 'A-Class (W176)'
            },
            {
              value: 'A-Class (W177)',
              validFor: [0, 1],
              label: 'A-Class (W177)'
            },
            {
              value: 'A-Class (V177)',
              validFor: [0],
              label: 'A-Class (V177)'
            },
            { value: 'B-Class (W246)', validFor: [0], label: 'B-Class (W246)' },
            {
              value: 'B-Class (W247)',
              validFor: [0],
              label: 'B-Class (W247)'
            },
            {
              value: 'C Cabrio (A205)',
              validFor: [0, 1],
              label: 'C Cabrio (A205)'
            },
            {
              value: 'C-Class (W205)',
              validFor: [0, 1],
              label: 'C-Class (W205)'
            },
            {
              value: 'C Coupe (C205)',
              validFor: [0, 1],
              label: 'C Coupe (C205)'
            },
            {
              value: 'C Estate (S205)',
              validFor: [0, 1],
              label: 'C Estate (S205)'
            },
            { value: 'CLA (C117)', validFor: [0, 1], label: 'CLA (C117)' },
            {
              value: 'CLA (C118)',
              validFor: [0, 1],
              label: 'CLA (C118)'
            },
            {
              value: 'CLA SB (X117)',
              validFor: [0, 1],
              label: 'CLA SB (X117)'
            },
            {
              value: 'CLS (C257)',
              validFor: [0, 1],
              label: 'CLS (C257)'
            },
            {
              value: 'E-Class (W213)',
              validFor: [0, 1],
              label: 'E-Class (W213)'
            },
            {
              value: 'E Coupe (C238)',
              validFor: [0, 1],
              label: 'E Coupe (C238)'
            },
            {
              value: 'E Estate (S213)',
              validFor: [0],
              label: 'E Estate (S213)'
            },
            {
              value: 'G-Class (W463)',
              validFor: [0, 1],
              label: 'G-Class (W463)'
            },
            { value: 'GLA (X156)', validFor: [0, 1], label: 'GLA (X156)' },
            {
              value: 'GLC (X253)',
              validFor: [0, 1],
              label: 'GLC (X253)'
            },
            {
              value: 'GLC Coupe (C253)',
              validFor: [0, 1],
              label: 'GLC Coupe (C253)'
            },
            {
              value: 'GLE (W166)',
              validFor: [0],
              label: 'GLE (W166)'
            },
            { value: 'GLE (V167)', validFor: [0], label: 'GLE (V167)' },
            {
              value: 'GLE Coupe (C292)',
              validFor: [0, 1],
              label: 'GLE Coupe (C292)'
            },
            { value: 'GLS (X166)', validFor: [0, 1], label: 'GLS (X166)' },
            {
              value: 'GLS (X167)',
              validFor: [0],
              label: 'GLS (X167)'
            },
            {
              value: 'S-Class (W/V222)',
              validFor: [0],
              label: 'S-Class (W/V222)'
            },
            {
              value: 'S Coupe (C217)',
              validFor: [0, 1],
              label: 'S Coupe (C217)'
            },
            { value: 'SL (R231)', validFor: [0], label: 'SL (R231)' },
            {
              value: 'SLC (R172)',
              validFor: [0, 1],
              label: 'SLC (R172)'
            },
            {
              value: 'V-Class (V-Class VS20)',
              validFor: [0],
              label: 'V-Class (V-Class VS20)'
            },
            {
              value: 'Vito (Vito VS20)',
              validFor: [0],
              label: 'Vito (Vito VS20)'
            },
            {
              value: 'GT (C190)',
              validFor: [1],
              label: 'GT (C190)'
            },
            { value: 'GT (X290)', validFor: [1], label: 'GT (X290)' },
            {
              value: 'GT Roadster (R190)',
              validFor: [1],
              label: 'GT Roadster (R190)'
            },
            { value: 'Maybach (X222)', validFor: [2], label: 'Maybach (X222)' },
            {
              value: 'fortwo (C453)',
              validFor: [3],
              label: 'fortwo (C453)'
            },
            {
              value: 'forfour (W453)',
              validFor: [3],
              label: 'forfour (W453)'
            },
            {
              value: 'Mercedes-Benz Select',
              validFor: [4],
              label: 'Mercedes-Benz Select'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Retail_Task__c/picklist-values/0120k000000Ac2UAAS/TestDriveClass__c',
          eTag: '9975ed22603d3ff40a900a08eea08526',
          controllerValues: {
            'Mercedes-Benz Select': 4,
            smart: 3,
            'Mercedes-Maybach': 2,
            'Mercedes-AMG': 1,
            'Mercedes-Benz': 0
          }
        },
        TestDriveBrand: {
          values: [
            {
              value: 'Mercedes-Benz',
              validFor: [],
              label: 'Mercedes-Benz'
            },
            { value: 'Mercedes-AMG', validFor: [], label: 'Mercedes-AMG' },
            {
              value: 'Mercedes-Maybach',
              validFor: [],
              label: 'Mercedes-Maybach'
            },
            { value: 'smart', validFor: [], label: 'smart' },
            {
              value: 'Mercedes-Benz Select',
              validFor: [],
              label: 'Mercedes-Benz Select'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Retail_Task__c/picklist-values/0120k000000Ac2UAAS/TestDriveBrand__c',
          eTag: '2e42edec70a9ed8b6223922dbe8b3861',
          controllerValues: {}
        },
        CallResult: {
          values: [
            { value: 'In process', validFor: [], label: '處理中' },
            {
              value: 'Successful',
              validFor: [],
              label: '成功'
            },
            { value: 'Failed', validFor: [], label: '未接/失敗' }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Retail_Task__c/picklist-values/0120k000000Ac2UAAS/CallResult__c',
          eTag: '2fafea96310e885f915ac9c5ce7aa852',
          controllerValues: {}
        },
        CommunicationChannel: {
          values: [
            { value: 'Email', validFor: [], label: '電子郵件' },
            {
              value: 'IB Call',
              validFor: [],
              label: '電話進線'
            },
            { value: 'Letter', validFor: [], label: '信件' },
            {
              value: 'OB Call',
              validFor: [],
              label: '外撥'
            },
            { value: 'SMS', validFor: [], label: '簡訊' },
            {
              value: 'Social Media',
              validFor: [],
              label: '社群媒體'
            },
            { value: 'Showroom visit', validFor: [], label: '客戶來訪' },
            {
              value: 'Visit Customer',
              validFor: [],
              label: '拜訪客戶'
            },
            {
              value: 'No Communication with Customer',
              validFor: [],
              label: '不需聯絡客戶'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Retail_Task__c/picklist-values/0120k000000Ac2UAAS/CommunicationChannel__c',
          eTag: 'aab3117cffe0bc55fad410fbf1901e2f',
          controllerValues: {}
        },
        ActivityPurposeCRM: {
          values: [
            {
              value: 'Vehicle pick-up or returning',
              validFor: [],
              label: '取送車'
            },
            {
              value: 'Insurance renewal notice and registration',
              validFor: [],
              label: '續保通知與辦理'
            },
            { value: 'Insurance activation', validFor: [], label: '出險辦理' },
            {
              value: 'Birthday care',
              validFor: [],
              label: '生日關懷'
            },
            {
              value: 'Warranty expiration care',
              validFor: [],
              label: '保固到期關懷'
            },
            {
              value: 'Invitation of pre-sale and post-sale marketing activity',
              validFor: [],
              label: '售前與售後行銷活動邀請'
            },
            {
              value: 'Customer requirement',
              validFor: [],
              label: '顧客交辦事項'
            },
            {
              value: 'Others',
              validFor: [],
              label: '其他'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Retail_Task__c/picklist-values/0120k000000Ac2UAAS/ActivityPurpose_CRM__c',
          eTag: 'f0f518e65ec03a1362430d6f4f15cfb0',
          controllerValues: {}
        },
        ActivityPurpose: {
          values: [
            {
              value: 'Prospecting',
              validFor: [],
              label: '需求探詢'
            },
            { value: 'TestDrive', validFor: [], label: '試駕' },
            {
              value: 'Trade-in Offer',
              validFor: [],
              label: '換購'
            },
            { value: 'Negotiation', validFor: [], label: '報價' },
            {
              value: 'Contract',
              validFor: [],
              label: '簽約'
            },
            {
              value: 'Financial and leasing related activities',
              validFor: [],
              label: '貸款或租賃對保'
            },
            { value: 'Accept', validFor: [], label: '報售' },
            {
              value: 'Registration',
              validFor: [],
              label: '掛牌'
            },
            { value: 'Registered', validFor: [], label: '報交' },
            {
              value: 'HandOver',
              validFor: [],
              label: '交車'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Retail_Task__c/picklist-values/0120k000000Ac2UAAS/ActivityPurpose__c',
          eTag: '814bb8b6c27b3cf619136586c3fdd4b0',
          controllerValues: {}
        }
      },
      fakeEvent
    );
  },

  retrieveCampaignMetadata: handler => {
    handler(
      {
        RecordType: {
          values: [
            {
              value: 'MBTw Event Retail Campaign',
              label: 'MBTw Event Retail Campaign'
            },
            {
              value: 'MBTw Media Retail Campaign',
              label: 'MBTw Media Retail Campaign'
            }
          ]
        },
        Purpose: {
          values: [
            {
              value: 'Brand Enhancement',
              validFor: [],
              label: '品牌提升'
            },
            {
              value: 'Acquisition',
              validFor: [],
              label: '收集潛客'
            },
            {
              value: 'Increase Sales',
              validFor: [],
              label: '增加銷售'
            },
            {
              value: 'Loyalty',
              validFor: [],
              label: '忠實客戶'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Retail_Campaign__c/picklist-values/0126F000001UTssQAG/Purpose__c',
          eTag: 'da87a8f8fc3943c0cad4cc4ca5bde6b8',
          controllerValues: {}
        },
        InvitationBy: {
          values: [
            {
              value: 'Sales Consultant',
              validFor: [],
              label: '銷售顧問'
            },
            {
              value: 'Retail CCC',
              validFor: [],
              label: '客服中心'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Retail_Campaign__c/picklist-values/0126F000001UTssQAG/Invitation_by__c',
          eTag: '7228aada0159ac49b53ac3668f2edc66',
          controllerValues: {}
        },
        Status: {
          values: [
            {
              value: 'Planned',
              validFor: [],
              label: '計畫'
            },
            {
              value: 'Open for registration',
              validFor: [],
              label: '開放報名'
            },
            {
              value: 'Started',
              validFor: [],
              label: '執行'
            },
            {
              value: 'Ended',
              validFor: [],
              label: '結束'
            },
            {
              value: 'Canceled',
              validFor: [],
              label: '取消'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Retail_Campaign__c/picklist-values/0126F000001UTssQAG/Status__c',
          eTag: '2eb8e761337f734f78e65fd4d03c9b9d',
          controllerValues: {}
        }
      },
      fakeEvent
    );
  },

  retrieveFieldTranslation: handler => {
    handler(
      {
        AccountLinkFieldTranslation: {
          AllowDataSharing: '是否同意被聯絡',
          AllowPersonalInfo: '是否填寫個資同意書',
          AutolineCustomerID: 'Autoline Customer ID',
          Birthday: '出生日期',
          CompanyName: '服務公司名稱',
          ConsentEndDate: '個資同意書截止日期',
          ConsentStartDate: '個資同意書生效日期',
          Email: '電子郵件',
          Fax: '傳真',
          FirstName: '名字',
          HouseholdAmount: '家中人數',
          IDNumber: '證件號碼',
          InvalidCustomer: '無效客戶',
          LeasingInsuranceCompany: '租賃/保險公司聯絡人',
          Mobile: '行動電話號碼',
          Name: '姓',
          NoEmail: '無電子郵件',
          PDPAChannel: '個資同意書簽署管道',
          Phone: '住宅電話',
          PostCode: '郵遞區號',
          PreferredChannel: '最佳客戶聯繫方式',
          PreferredContactTime: '偏好聯絡時間',
          PreferredMarketingActivity: '偏好的客戶關懷活動',
          PreOwnedVehicleBrand1: '購買此車前主要使用車輛品牌1',
          PreviousMBCarsSold: '名下車已全售',
          ResidentialPostCode: '戶籍地址-郵遞區號',
          RetailResidential: '戶籍地址',
          Salutation: '先生/小姐',
          SocialMedia1: '社群帳號1(種類)',
          SocialMedia2: '社群帳號2(種類)',
          SocialMedia3: '社群帳號3(種類)',
          SocialMediaAccountID: '社群帳號1',
          SocialMediaAccountID2: '社群帳號2',
          SocialMediaAccountID3: '社群帳號3',
          SourceOfContact: '購買訊息來源',
          SpecialMarkonAccount: '備註',
          Street1: '通訊地址#1',
          UnreachableCustomer: '失聯客戶',
          VehicleAmount: '家中現有車輛數',
          WorkPhone: '公司電話'
        },
        CaseFieldTranslation: {
          CaseClass: '案件/記錄分類',
          CaseSubType: '案件/記錄原因',
          CaseType: '案件/記錄類型',
          Description: '詳細內容',
          Subject: '主題'
        },
        LeadFieldTranslation: {
          AccountLinkId: '客戶姓氏',
          ActualContractedDate: '實際簽約日期',
          ActualContractSignoffDate: '實際報售日期',
          ActualHandoverDate: '實際交車日期',
          ActualRegistrationDate: '實際掛牌日期',
          Brand2: '興趣品牌 2',
          Brand3: '興趣品牌 3',
          Class2: '興趣車系 2',
          Class3: '興趣車系 3',
          ClosureReasonsbySC: '銷售顧問敗戰原因',
          ClosureReasonsDrilldownBySC: '銷售顧問敗戰原因細分',
          CompetitorBrand: '對比品牌',
          CompetitorClass: '對比車系',
          ContactContent: '最後接洽行動',
          CreatedDate: '建立日期',
          CurrentChannel: '來源管道',
          DealerComments: '備註',
          EstContractSignOffDate: '預計簽約日期',
          EstHandoverDate: '客戶希望交車日',
          EstRegistrationDate: '預計掛牌日期',
          Fleet: '批售',
          Grading: '銷售商機等級',
          LastModifiedDateTimeBySMSC: '商機修改日期',
          LeadStatus: '銷售商機狀態',
          LeadStatusDetail: '銷售商機狀態細分',
          Model2: '興趣車型 2',
          Model3: '興趣車型 3',
          PaymentMethod: '購車方案',
          ResultforLastContactContent: '最後一次行動執行結果',
          RetailAssignDateTime: 'CCC指派時間',
          RetailCampaignName: '行銷活動',
          RetailInterestedVehicleBrand: '興趣品牌',
          RetailInterestedVehicleClass: '興趣車系',
          RetailInterestedVehicleModel: '興趣車型',
          SCFirstOpenLeadDateTime: 'SC首次查看指派商機時間',
          SMAssignSCDateTime: 'SM指派時間',
          TradeIn: '換購',
          Usage: '購車用途',
          VehicleStockStatus: '車輛庫存狀態'
        },
        RetailCampaignFieldTranslation: {
          Brand: '品牌',
          Comments: '計畫備註',
          EndDate: '活動結束日期',
          EventType: '活動類型',
          InvitationBy: '邀請人',
          Location: '活動地點',
          MBTwComment: 'MBTw意見',
          Name: '名稱',
          ParticipatingOutlets:
            '參與據點 (請於新增活動後點選 "管理參與據點" 按鈕)',
          Purpose: '主要活動目的',
          StartDate: '活動開始日期)',
          Status: '行銷活動狀態'
        },
        RetailCampaignMemberFieldTranslation: {
          AcceptStatus: '是否接受邀約',
          AccountLinkName: '姓名',
          ActualShowUpDate: '實際出席日期',
          CampaignName: '經銷商活動',
          CommunicationChannel: '聯絡管道',
          ExpectedShowUpDateTime: '預計出席日期/時間',
          InvitedStatus: '是否有邀約',
          Mobile: '行動電話號碼',
          ParticipateDate: '出席活動日期',
          ShowUpStatus: '是否出席活動'
        },
        RetailTaskFieldTranslation: {
          AccountLinkId: '客戶記錄(Retail View)',
          ActivityPurpose: '任務目的',
          ActivityStatus: '是否已結案',
          CallResult: '連絡結果',
          CancelReason: '取消原因',
          Comments: '結案詳細內容',
          CommunicationChannel: '聯絡管道',
          DueDate: 'Due Date',
          EndDate: '結束時間',
          LeadId: '銷售線索',
          Location: '地點',
          StartDate: '開始時間',
          TestDriveBrand: '試駕品牌',
          TestDriveClass: '試駕車系'
        }
      },
      fakeEvent
    );
  },

  retrieveRetailCampaignMemberMetadata: handler => {
    handler(
      {
        CommunicationChannel: {
          values: [
            {
              value: 'OB CALL',
              validFor: [],
              label: '外撥電話'
            },
            {
              value: 'Social Media',
              validFor: [],
              label: '社群媒體'
            },
            {
              value: 'Website',
              validFor: [],
              label: '網站'
            },
            {
              value: 'Email',
              validFor: [],
              label: '電子郵件'
            },
            {
              value: 'Mail',
              validFor: [],
              label: '實體信件'
            },
            {
              value: 'SMS/MMS',
              validFor: [],
              label: 'SMS/MMS'
            },
            {
              value: 'Passing by',
              validFor: [],
              label: '路過客'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Retail_Campaign_Member__c/picklist-values/0126F000001UTsrQAG/Communication_Channel__c',
          eTag: '5aa9277ba0aa7a5fcb6032fdac17140f',
          controllerValues: {}
        },
        Status: {
          values: [
            {
              value: 'New',
              validFor: [],
              label: '新增'
            },
            {
              value: 'Not Contacted',
              validFor: [],
              label: '未聯絡'
            },
            {
              value: 'Sent',
              validFor: [],
              label: '邀請已發送'
            },
            {
              value: 'Accepted',
              validFor: [],
              label: '接受邀請'
            },
            {
              value: 'Rejected',
              validFor: [],
              label: '拒絕邀請'
            },
            {
              value: 'Failed',
              validFor: [],
              label: '未連繫上'
            },
            {
              value: 'Show up',
              validFor: [],
              label: '出席活動'
            },
            {
              value: 'Not Show up',
              validFor: [],
              label: '未出席活動'
            },
            {
              value: 'Order Placed',
              validFor: [],
              label: '已下訂單'
            },
            {
              value: 'Converted',
              validFor: [],
              label: '已轉換商機'
            },
            {
              value: 'Need Call Back',
              validFor: [],
              label: '需回電'
            }
          ],
          url:
            '/services/data/v43.0/ui-api/object-info/Retail_Campaign_Member__c/picklist-values/0126F000001UTsrQAG/Status__c',
          eTag: 'ceeee89253b1ffbf837f27728d174dae',
          defaultValue: {
            value: 'New',
            validFor: [],
            label: '新增'
          },
          controllerValues: {}
        }
      },
      fakeEvent
    );
  },

  retrieveRetailCampaignDetail: (id, handler) => {
    handler(
      {
        retailCampaigns: [
          {
            Brand: 'MB',
            EndDate: 1547078400000,
            Id: 'a1j0k0000005gkdAAA',
            Location: '台北',
            Name: 'Retail Marketing Campaign 1',
            NubmerOfInvited: 1,
            NumberOfAccepted: 1,
            NumberOfRetailCampaignMember: 3,
            NumberOfShowUp: 3,
            StartDate: 1547078400000,
            Status: 'Started'
          }
        ],
        isSuccessful: true,
        message: 'Success'
      },
      fakeEvent
    );
  },
  retrieveLeadDetail: (id, handler) => {
    handler(
      {
        lead: {
          AccountLinkId: 'a1k0k000003wx6uAAA',
          CreatedDate: 1547462106000,
          CurrentChannel: 'Referral',
          Fleet: false,
          Grading: 'C - Within 3 month',
          Id: 'a160k000001Gpg8AAC',
          LeadNo: 'L-0012654076',
          LeadStatus: 'In Progress',
          RetailInterestedVehicleBrand: 'Mercedes-Maybach',
          RetailInterestedVehicleClass: 'Maybach (X222)',
          RetailInterestedVehicleModel: 'M-MAYBACH S650',
          SalesConsultant: '郝 顧問',
          SalesConsultantId: '0030k00000jexurAAA',
          SCFirstOpenLeadDateTime: 1566265569000,
          TradeIn: false,
          Usage: 'Use for business',
          LeadStatusDetail: '',
          VehicleStockStatus: 'Stock in TW/on ship'
          // RetailAssignDateTime:1547462106000,
          // SMAssignSCDateTime:1547462106000
        },
        isSuccessful: true,
        message: 'Success'
      },
      fakeEvent
    );
  },
  retrieveAccountLinkDetail: (id, handler) => {
    handler(
      {
        accountlink: {
          AllowPersonalInfo: 'Not Signed Yet',
          CreatedDate: 1547462047000,
          CustomerType: 'P',
          FirstName: '在',
          FullName: '自在',
          HasInProcessLeads: true,
          Id: 'a1k0k000003wx6uAAA',
          InvalidCustomer: false,
          LastLeadId: 'a160k000001Gpg8AAC',
          LeasingInsuranceCompany: false,
          Mobile: '0986532442',
          Name: '自',
          NoEmail: true,
          PreviousMBCarsSold: false,
          SalesConsultant: '郝 顧問',
          SalesConsultantId: '0030k00000jexurAAA',
          Salutation: 'Mr',
          UnreachableCustomer: false,
          AutolineCustomerID: 'Ixxxxxxxxx'
        },
        isSuccessful: true,
        message: 'Success'
      },
      fakeEvent
    );
  },
  retrieveAvaiableCustomerListViews: handler => {
    handler([], fakeEvent);
  },
  retrieveRetailCampaignMembers: (id, handler) => {
    handler([], fakeEvent);
  }
};
