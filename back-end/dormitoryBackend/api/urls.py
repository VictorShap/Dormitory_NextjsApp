from django.urls import path
from . import views

urlpatterns=[
    path("students/", views.CreateStudent.as_view(), name="create-student"),
    path("rooms/", views.CreateRoom.as_view(), name="create-room"),
    path("applications/", views.CreateApplication.as_view(), name="create-application"),
    path("bookings/", views.CreateBooking.as_view(), name="create-booking"),
    path(
        "students/<int:pk>/",views.StudentRetrieveUpdateDestroy.as_view(),
        name="student-update"
    ),
    path(
        "rooms/<int:pk>/",views.RoomRetrieveUpdateDestroy.as_view(),
        name="rooms-update"
    ),
    path("bookings/<int:pk>/", views.BookingRetrieveUpdateDestroy.as_view(), name="booking-update"),
    path("rooms/<int:room_id>/availability/", views.check_room_availability, name="check-room-availability"),
    path("rooms/floor/<int:floor>/", views.RoomsByFloor.as_view(), name="rooms-by-floor"), 
    path("book_room/", views.book_room, name="book-room")
]