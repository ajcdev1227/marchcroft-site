import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// Async thunk to fetch content
export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async (locale: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${baseUrl}/api/home-content?populate=solutions.icon&populate=services&populate=technologies.icon&locale=${locale}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      const data = await response.json();
      return data?.data?.attributes;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Slice
const contentSlice = createSlice({
  name: 'content',
  initialState: {
    sectionContent: {
      heroText: "",
      subHeroText: "",
      aboutUsDescription: "",
      ourVisionDescription: "",
      locale: "",
      ctaBookConsultation: "",
      aboutUsTitle: "",
      ourVisionTitle: "",
      sections: {
        servicesOn: false,
        nav: {
          navLinks: [],
          navMobLinks: [],
          lngs: []
        },
        ourServicesSection: {
          title: "",
          description: ""
        },
        ourSolutionsSection: {
          title: "",
          description: ""
        },
        howWeWorkSection: {
          title: "",
          description: ""
        },
        ourTechnologyStackSection: {
          title: "",
          description: ""
        },
        ourWorkSection: {
          title: "",
          description: ""
        },
        talkToUsSection: {
          title: "",
          description: ""
        }
      },
      solutions: [],
      services: [],
      technologies: [],
      ourWorkPage: {
        title: "",
        header: "",
        description: ""
      },
      careersPage: {
        title: "",
        header: "",
        description: ""
      },
    },
    status: 'idle',
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContent.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.sectionContent = action.payload;
      })
      .addCase(fetchContent.rejected, (state, action) => {
        state.status = 'failed';
        // state.error = action.payload ?? null;
      });
  },
});

// Selectors
export const selectSectionContent = (state: { content: { sectionContent: any; }; }) => state.content.sectionContent;
export const selectContentStatus = (state: { content: { status: any; }; }) => state.content.status;
export const selectContentError = (state: { content: { error: any; }; }) => state.content.error;

export const selectSolutions = (state: { content: { sectionContent: { solutions: any; }; }; }) => state.content.sectionContent.solutions;
export const selectServices = (state: { content: { sectionContent: { services: any; }; }; }) => state.content.sectionContent.services;
export const selectTechnologies = (state: { content: { sectionContent: { technologies: any; }; }; }) => state.content.sectionContent.technologies;

export const selectOurWorkPage = (state: { content: { sectionContent: { ourWorkPage: any; }; }; }) => state?.content?.sectionContent?.ourWorkPage;
export const selectCareersPage = (state: { content: { sectionContent: { careersPage: any; }; }; }) => state?.content?.sectionContent?.careersPage;

// Individual selectors for each section
export const selectNav = (state: { content: { sectionContent: { sections: { nav: any; }; }; }; }) => state?.content?.sectionContent?.sections?.nav;
export const selectOurServicesSection = (state: { content: { sectionContent: { sections: { ourServicesSection: any; }; }; }; }) => state?.content?.sectionContent?.sections?.ourServicesSection;
export const selectOurSolutionsSection = (state: { content: { sectionContent: { sections: { ourSolutionsSection: any; }; }; }; }) => state?.content?.sectionContent?.sections?.ourSolutionsSection;
export const selectHowWeWorkSection = (state: { content: { sectionContent: { sections: { howWeWorkSection: any; }; }; }; }) => state?.content?.sectionContent?.sections?.howWeWorkSection;
export const selectOurTechnologyStackSection = (state: { content: { sectionContent: { sections: { ourTechnologyStackSection: any; }; }; }; }) => state?.content?.sectionContent?.sections?.ourTechnologyStackSection;
export const selectOurWorkSection = (state: { content: { sectionContent: { sections: { ourWorkSection: any; }; }; }; }) => state?.content?.sectionContent?.sections?.ourWorkSection;
export const selectTalkToUsSection = (state: { content: { sectionContent: { sections: { talkToUsSection: any; }; }; }; }) => state?.content?.sectionContent?.sections?.talkToUsSection;
export const selectServicesToggle = (state: { content: { sectionContent: { sections: { servicesOn: any; }; }; }; }) => state?.content?.sectionContent?.sections?.servicesOn;

export default contentSlice.reducer;
