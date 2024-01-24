<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Eleven11;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Get contest data
Route::get('contestData',[Eleven11::class,'getContestData']);
Route::get('tournamentData',[Eleven11::class,'getTournamentData']);
Route::get('myContestData',[Eleven11::class,'getmyContest']);
Route::get('playersData/{id}',[Eleven11::class,'getPlayersData']);
Route::get('myplayersData/{id}',[Eleven11::class,'getmyPlayers']);

//Post contest data
Route::post('myContest',[Eleven11::class,'postmyContest']);
Route::post('myPlayer',[Eleven11::class,'postmyPlayer']);
