// import { Routes, Route } from "react-router-dom";
// import { lazy, Suspense, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { refreshUser } from "../../redux/auth/operations";

// import Layout from "../../components/Layout/Layout";
// // import RestrictedRoute from "../../components/RestrictedRoute/RestrictedRoute";

// const HomePage = lazy(() => import("../HomePage/HomePage"));
// const NotFoundPage = lazy(() => import("../NotFounderPage/NotFounderPage"));
// // const RegistrationPage = lazy(() =>
// //   import("../RagistrationPage/RegistrationPage")
// // );

// // const LoginPage = lazy(() => import("../LoginPage/LoginPage"));
// const GalleryPage = lazy(() => import("../GalleryPage/GalleryPage"));

// import { selectUserDataIsRefreshing } from "../../redux/auth/selectors";

// export default function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   const isRefreshing = useSelector(selectUserDataIsRefreshing);

//   if (isRefreshing) {
//     return <div>Loading user...</div>;
//   }

//   return (
//     <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<HomePage />} />
//             {/* <Route
//               path="register"
//               element={<RestrictedRoute component={<RegistrationPage />} />}
//             />
//             <Route
//               path="login"
//               element={<RestrictedRoute component={<LoginPage />} />}
//             />

//             <Route path="gallery" element={<GalleryPage />} /> */}

//             <Route path="gallery" element={<GalleryPage />} />

//             <Route path="cart" element={<GalleryPage />} />
//             <Route path="profile" element={<GalleryPage />} />

//             <Route path="*" element={<NotFoundPage />} />
//           </Route>
//         </Routes>
//       </Suspense>
//     </div>
//   );
// }

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";

import Layout from "../../components/Layout/Layout";
import { selectUserDataIsRefreshing } from "../../redux/auth/selectors";

const HomePage = lazy(() => import("../HomePage/HomePage"));
const NotFoundPage = lazy(() => import("../NotFounderPage/NotFounderPage"));
const GalleryPage = lazy(() => import("../GalleryPage/GalleryPage"));
const CartPage = lazy(() => import("../CartPage/CartPage"));
const ProfilePage = lazy(() => import("../ProfilePage/ProfilePage"));
const GalleryItemPage = lazy(() =>
  import("../GalleryItemPage/GalleryItemPage")
);

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectUserDataIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Loading user...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="gallery/:id" element={<GalleryItemPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
