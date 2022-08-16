<?php

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', [LoginController::class, 'showLoginForm'])->name('/');
Route::post('login_attempt', [LoginController::class, 'login'])->name('login_attempt');
Route::group(['middleware' => ['auth', 'api']], function () {
    Route::get('home', function () {
        return Inertia::render('Home/Index');
    });
    Route::get('barang', function () {
        return Inertia::render('Barang/Index');
    });

});

Auth::routes();
